/**
 * jInclude
 *
 * @copyright	Copyright 2013, Dimitris Krestos
 * @license		Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link			http://vdw.staytuned.gr
 * @version		v0.1.0
 */

;(function($, window, undefined) {
	"use strict";

	$.fn.jinclude = function(options) {

		var defaults = {
			partial: ''
		};

		var options = $.extend(defaults, options);

		$(this).each(function() {

			var $this = $(this);

			// Ungly overwrite
			options.partial = $(this).data('include') || options.list;

			var data = '';
			var xmlhttp = new XMLHttpRequest();

			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
					data = xmlhttp.responseText;
					$this.html(data);
				};
			};

			xmlhttp.open('GET', options.partial, true);
			xmlhttp.send();

		});

	};

	$(document).ready(function () { $('[data-include$=".html"]').jinclude(); });

})(jQuery);