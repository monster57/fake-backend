/**
 * Simple service to activate noty2 message to GUI. This service can be used every where in application. Generally
 * all $http and $socket queries uses this service to show specified errors to user.
 *
 * Service can be used as in following examples (assuming that you have inject this service to your controller):
 *  Message.success(message, [title], [options]);
 *  Message.error(message, [title], [options]);
 *  Message.message(message, [title], [options]);
 *
 * Feel free to be happy and code some awesome stuff!
 *
 * @todo do we need some queue dismiss?
 */
 (function() {
 'use strict';

 angular.module('kbitsApp.components.services')
   .factory('MessageService', [
       function MessageService(  ) {
        var service = {};
        //var _ = CONSTANTS._ ;
        var _ = window._;

        toastr.options = {
            "closeButton": true,
        };
        /**
         * Private helper function to make actual message via toastr component.
         *
         * @param   {string}  message         Message content
         * @param   {string}  title           Message title
         * @param   {{}}      options         Message specified options
         * @param   {{}}      defaultOptions  Default options for current message type
         * @param   {string}  type            Message type
         * @private
         */
        function _makeMessage(message, title, options, defaultOptions, type) {
          title = title || '';
          options = options || {};
          toastr[type](message, title, _.assign(defaultOptions, options));
        }

        /**
         * Method to generate 'success' message.
         *
         * @param   {string}  message   Message content
         * @param   {string}  [title]   Message title
         * @param   {{}}      [options] Message options
         */
        service.success = function success(message, title, options) {
          var defaultOptions = {
            timeOut: 2000,
             extendedTimeOut: 5000,
             progressBar : true,
             preventDuplicates : true,
             showMethod:'slideDown',
             hideMethod : 'slideUp'
          };

          _makeMessage(message, title, options, defaultOptions, 'success');
        };

        /**
         * Method to generate 'info' message.
         *
         * @param   {string}  message   Message content
         * @param   {string}  [title]   Message title
         * @param   {{}}      [options] Message options
         */
        service.info = function error(message, title, options) {
          var defaultOptions = {
            timeout: 2000,
            extendedTimeOut: 5000,
            progressBar : true,
            preventDuplicates : true,
            showMethod:'slideDown',
            hideMethod : 'slideUp'
          };

          _makeMessage(message, title, options, defaultOptions, 'info');
        };

        /**
         * Method to generate 'warning' message.
         *
         * @param   {string}  message   Message content
         * @param   {string}  [title]   Message title
         * @param   {{}}      [options] Message options
         */
        service.warning = function error(message, title, options) {
          var defaultOptions = {
            timeout: 3000,
             extendedTimeOut: 5000,
             progressBar : true,
             preventDuplicates : true,
             showMethod:'slideDown',
             hideMethod : 'slideUp',
             showEasing : 'swing'
          };

          _makeMessage(message, title, options, defaultOptions, 'warning');
        };

        /**
         * Method to generate 'error' message.
         *
         * @param   {string}  message   Message content
         * @param   {string}  [title]   Message title
         * @param   {{}}      [options] Message options
         */
        service.error = function error(message, title, options) {
          var defaultOptions = {
             timeOut: 0,
             progressBar : true,
             preventDuplicates : true,
             showMethod:'slideDown',
             hideMethod : 'slideUp',
             showEasing : 'swing'
          };
          _makeMessage(message, title, options, defaultOptions, 'error');
        };

        return service;
      }
    ])
  ;
}());