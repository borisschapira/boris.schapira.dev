<?php
// Note: this script requires PHP ≥ 5.4.
// Inspired from https://mathiasbynens.be/notes/csp-reports

define('DATA_KEY', 'csp-report');

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

// Get the raw POST data
$data = file_get_contents('php://input');


// Only continue if it’s valid JSON that is not just `null`, `0`, `false` or an
// empty string, i.e. if it could be a CSP violation report.
if ($data = json_decode($data, true)) {
    
    // get source-file to perform some tests
    $source_file    = $data[self::DATA_KEY]['source-file'];
    $script_sample  = $data[self::DATA_KEY]['script-sample'];


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

        // Writing in DB
        $query_insert = " INSERT INTO csp_reports SET ";
        $query_insert.= " document_uri          = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['document-uri'] )."', ";
        $query_insert.= " full_report           = '".mysqli_real_escape_string( $lk , $data_flat )."', ";
        $query_insert.= " referrer              = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['referrer'] )."', ";
        $query_insert.= " violated_directive    = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['violated-directive'] )."', ";
        $query_insert.= " original_policy       = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['original-policy'] )."', ";
        $query_insert.= " blocked_uri           = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['blocked-uri'] )."', ";
        $query_insert.= " source_file           = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['source-file'] )."', ";
        $query_insert.= " line_number           = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['line-number'] )."', ";
        $query_insert.= " column_number         = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['column-number'] )."', ";
        $query_insert.= " status_code           = '".mysqli_real_escape_string( $lk , $data[self::DATA_KEY]['status-code'] )."' ";

        $obj = mysqli_query($lk, $query_insert);
      }

}

?>
