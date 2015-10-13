<?php
// Note: this script requires PHP ≥ 5.4.
// Inspired from https://mathiasbynens.be/notes/csp-reports

// Dareboost wants it? Not a problem.
header('X-Content-Type-Options: "nosniff"');

// Mysql connexion
@$lk = mysqli_connect("mysql-borisschapira.alwaysdata.net", "48271_csp_report", "reporting", "borisschapira_csp_reports");
if (!$lk) {
	echo "No DB.";
	exit;
}
if (!mysqli_set_charset($lk, "utf8")) {
    printf("No utf8: %s\n", mysqli_error($lk));
    exit;
}

// // Specify the email address to send reports to
// define('EMAIL', 'borisschapira@gmail.com');
// // Specify the desired email subject for violation reports
// define('SUBJECT', 'CSP violation');

// Get the raw POST data
$data = file_get_contents('php://input');


// Only continue if it’s valid JSON that is not just `null`, `0`, `false` or an
// empty string, i.e. if it could be a CSP violation report.
if ($data = json_decode($data, true)) {

  // get source-file to perform some tests
  $source_file   = $data['csp-report']['source-file'];
  $script_sample = $data['csp-report']['script-sample'];


  if (

     // avoid false positives notifications coming from Chrome extensions (Wappalyzer, MuteTab, etc.)
     // bug here https://code.google.com/p/chromium/issues/detail?id=524356
     strpos($source_file, 'chrome-extension://') === false

     // avoid false positives notifications coming from Safari extensions (diigo, evernote, etc.)
     && strpos($source_file, 'safari-extension://') === false

     // avoid Firefox inline styles false positives notifications coming from inspector
     // bug will be be fixed in next versions, see https://bugzilla.mozilla.org/show_bug.cgi?id=1195302
     // & https://bugzilla.mozilla.org/show_bug.cgi?id=1185351
     // activate it only if a lot of people are inspecting your pages => avoid a LOT of notifications
     // use this at your own risk: with great power comes great responsibilities
     /*
      && (
          strpos($script_sample, 'position:absolute;') === false
          && strpos($script_sample, 'top:') === false
          )
      */

     ) {

          // Prettify the JSON-formatted data
          $data_flat = json_encode(
                   $data,
                   JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES
                 );
          
          // // Simply mail the CSP violation report
          // mail(EMAIL, SUBJECT, $mail_data, 'Content-Type: text/plain;charset=utf-8');

          // Writing in DB
          $query_insert = " INSERT INTO csp_reports SET ";
          $query_insert.= " document_uri       = '".mysqli_real_escape_string( $lk , $data['csp-report']['document-uri'] )."', ";
          $query_insert.= " full_report        = '".mysqli_real_escape_string( $lk , $data_flat )."', ";
          $query_insert.= " referrer           = '".mysqli_real_escape_string( $lk , $data['csp-report']['referrer'] )."', ";
          $query_insert.= " violated_directive = '".mysqli_real_escape_string( $lk , $data['csp-report']['violated-directive'] )."', ";
          $query_insert.= " original_policy    = '".mysqli_real_escape_string( $lk , $data['csp-report']['original-policy'] )."', ";
          $query_insert.= " blocked_uri 	   = '".mysqli_real_escape_string( $lk , $data['csp-report']['blocked-uri'] )."', ";
          $query_insert.= " source_file        = '".mysqli_real_escape_string( $lk , $data['csp-report']['source-file'] )."', ";
          $query_insert.= " line_number        = '".mysqli_real_escape_string( $lk , $data['csp-report']['line-number'] )."', ";
          $query_insert.= " column_number      = '".mysqli_real_escape_string( $lk , $data['csp-report']['column-number'] )."', ";
          $query_insert.= " status_code        = '".mysqli_real_escape_string( $lk , $data['csp-report']['status-code'] )."' ";

          $obj = mysqli_query($lk, $query_insert);
      }

}

?>
