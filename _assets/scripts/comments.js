//= require vendors/zepto.1.2.0.min.js

// Staticman comment replies
// modified from Wordpress https://core.svn.wordpress.org/trunk/wp-includes/js/comment-reply.js
// Released under the GNU General Public License - https://wordpress.org/about/gpl/
// Completly snatched from Michael Rose's MadeMistake blog post https://mademistakes.com/articles/improving-jekyll-static-comments/
var addComment = {
  moveForm: function (commId, parentId, respondId, postId) {
    var div, element, style, cssHidden,
      t = this,
      comm = t.I(commId),
      respond = t.I(respondId),
      cancel = t.I('cancel-comment-reply-link'),
      parent = t.I('comment-replying-to'),
      post = t.I('comment-post-slug'),
      commentForm = respond.getElementsByTagName('form')[0];

    if (!comm || !respond || !cancel || !parent || !commentForm) {
      return;
    }

    t.respondId = respondId;
    postId = postId || false;

    if (!t.I('sm-temp-form-div')) {
      div = document.createElement('div');
      div.id = 'sm-temp-form-div';
      div.style.display = 'none';
      respond.parentNode.insertBefore(div, respond);
    }

    comm.parentNode.insertBefore(respond, comm.nextSibling);
    if (post && postId) {
      post.value = postId;
    }
    parent.value = parentId;
    cancel.style.display = '';

    cancel.onclick = function () {
      var t = addComment,
        temp = t.I('sm-temp-form-div'),
        respond = t.I(t.respondId);

      if (!temp || !respond) {
        return;
      }

      t.I('comment-replying-to').value = null;
      temp.parentNode.insertBefore(respond, temp);
      temp.parentNode.removeChild(temp);
      this.style.display = 'none';
      this.onclick = null;
      return false;
    };

    /*
     * Set initial focus to the first form focusable element.
     * Try/catch used just to avoid errors in IE 7- which return visibility
     * 'inherit' when the visibility value is inherited from an ancestor.
     */
    try {
      for (var i = 0; i < commentForm.elements.length; i++) {
        element = commentForm.elements[i];
        cssHidden = false;

        // Modern browsers.
        if ('getComputedStyle' in window) {
          style = window.getComputedStyle(element);
          // IE 8.
        } else if (document.documentElement.currentStyle) {
          style = element.currentStyle;
        }

        /*
         * For display none, do the same thing jQuery does. For visibility,
         * check the element computed style since browsers are already doing
         * the job for us. In fact, the visibility computed style is the actual
         * computed value and already takes into account the element ancestors.
         */
        if ((element.offsetWidth <= 0 && element.offsetHeight <= 0) || style.visibility === 'hidden') {
          cssHidden = true;
        }

        // Skip form elements that are hidden or disabled.
        if ('hidden' === element.type || element.disabled || cssHidden) {
          continue;
        }

        element.focus();
        // Stop after the first focusable element.
        break;
      }

    } catch (er) {}

    return false;
  },

  I: function (id) {
    return document.getElementById(id);
  }
};

$('#comment-form').on("submit", function submitForm(event) {

  // Stop form from submitting
  event.preventDefault();

  // Disable to prevent multiple submit
  var $form = $(this);
  var $submitBtn = $form.find('#comment-form-submit');
  $submitBtn.attr('disabled', 'disabled');

  var type = $form.attr('method'),
    url = $form.attr('action'),
    data = $form.serialize(),
    contentType = 'application/x-www-form-urlencoded';

  $.ajax({
    type: type,
    url: url,
    data: data,
    contentType: contentType,
    success: function (data) {
      console.log('Vole, petit commentaire !');
      $form.find('input, textarea').val('');
      $submitBtn.attr('disabled', null);
      $form.find('.info').addClass('hidden');
      $form.find('.info.success').removeClass('hidden');
    },
    error: function (err) {
      console.log(err);
      $submitBtn.attr('disabled', null);
      $form.find('.info').addClass('hidden');
      $form.find('.info.fail').removeClass('hidden');
    }
  });
});