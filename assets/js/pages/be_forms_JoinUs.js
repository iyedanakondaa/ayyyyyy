/*
 *  Document   : be_forms_validation.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Forms Validation Page
 */

// Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
class pageFormsValidation {
  /*
   * Init Validation functionality
   *
   */
  static initValidation() {
    // Load default options for jQuery Validation plugin
    One.helpers('jq-validation');

    // Init Form Validation
    jQuery('.js-validation').validate({
      ignore: [],
      rules: {
        'Username': {
          required: true,
          minlength: 3,
          maxlength: 16
        },
        'Email': {
          required: true,
          emailWithDot: true
        },
        'Password': {
          required: true,
          minlength: 5
        },
        'CnPassword': {
          required: true,
          equalTo: '#Password'
        },
        'Activation': {
          required: true
        },
        'val-skill': {
          required: true
        },
        'val-currency': {
          required: true,
          currency: ['$', true]
        },
        'val-website': {
          required: true,
          url: true
        },
        'val-phoneus': {
          required: true,
          phoneUS: true
        },
        'val-digits': {
          required: true,
          digits: true
        },
        'val-number': {
          required: true,
          number: true
        },
        'val-range': {
          required: true,
          range: [1, 5]
        },
        'val-terms': {
          required: true
        },
        'val-select2': {
          required: true
        },
        'val-select2-multiple': {
          required: true,
          minlength: 2
        }
      },
      messages: {
        'Username': {
          required: 'Please enter a username',
          minlength: 'Your username must consist of at least 3 characters',
          maxlength: 'Your username must consist of no more than 16 characters'
        },
        'Email': 'Please enter a valid email address',
        'Password': {
          required: 'Please provide a password',
          minlength: 'Your password must be at least 5 characters long'
        },
        'CnPassword': {
          required: 'Please provide a password',
          minlength: 'Your password must be at least 5 characters long',
          equalTo: 'Please enter the same password as above'
        },
        'val-select2': 'Please select a value!',
        'val-select2-multiple': 'Please select at least 2 values!',
        'Activation': 'Please enter a Activation Code!',
        'val-skill': 'Please select a skill!',
        'val-currency': 'Please enter a price!',
        'val-website': 'Please enter your website!',
        'val-phoneus': 'Please enter a US phone!',
        'val-digits': 'Please enter only digits!',
        'val-number': 'Please enter a number!',
        'val-range': 'Please enter a number between 1 and 5!',
        'val-terms': 'You must agree to the service terms!'
      }
    });
        // Init Form Validation
        jQuery('.js-validation2').validate({
          ignore: [],
          rules: {
            'Username': {
              required: true,
              minlength: 3,
              maxlength: 16
            },
            'Email': {
              required: true,
              emailWithDot: true
            },
            'Password': {
              required: true,
              minlength: 5
            },
            'CnPassword': {
              required: true,
              equalTo: '#Password'
            },
            'Activation': {
              required: true
            },
            'val-skill': {
              required: true
            },
            'val-currency': {
              required: true,
              currency: ['$', true]
            },
            'val-website': {
              required: true,
              url: true
            },
            'val-phoneus': {
              required: true,
              phoneUS: true
            },
            'val-digits': {
              required: true,
              digits: true
            },
            'val-number': {
              required: true,
              number: true
            },
            'val-range': {
              required: true,
              range: [1, 5]
            },
            'val-terms': {
              required: true
            },
            'val-select2': {
              required: true
            },
            'val-select2-multiple': {
              required: true,
              minlength: 2
            }
          },
          messages: {
            'Username': {
              required: 'Please enter a username',
              minlength: 'Your username must consist of at least 3 characters',
              maxlength: 'Your username must consist of no more than 16 characters'
            },
            'Email': 'Please enter a valid email address',
            'Password': {
              required: 'Please provide a password',
              minlength: 'Your password must be at least 5 characters long'
            },
            'CnPassword': {
              required: 'Please provide a password',
              minlength: 'Your password must be at least 5 characters long',
              equalTo: 'Please enter the same password as above'
            },
            'val-select2': 'Please select a value!',
            'val-select2-multiple': 'Please select at least 2 values!',
            'Activation': 'Please enter a Activation Code!',
            'val-skill': 'Please select a skill!',
            'val-currency': 'Please enter a price!',
            'val-website': 'Please enter your website!',
            'val-phoneus': 'Please enter a US phone!',
            'val-digits': 'Please enter only digits!',
            'val-number': 'Please enter a number!',
            'val-range': 'Please enter a number between 1 and 5!',
            'val-terms': 'You must agree to the service terms!'
          }
        });
    

    // Init Validation on Select2 change
    jQuery('.js-select2').on('change', e => {
      jQuery(e.currentTarget).valid();
    });
  }

  /*
   * Init functionality
   *
   */
  static init() {
    this.initValidation();
  }
}

// Initialize when page loads
One.onLoad(pageFormsValidation.init());