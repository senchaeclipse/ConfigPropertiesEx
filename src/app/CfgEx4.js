Ext.define("MyApp.CfgEx4", {
	/**
	 * @cfg {Object} configprop
	 * @cfg {String} configprop.bar
	 * @cfg {Boolean} configprop.zot
	 * @cfg {String[]} configprop.three
	 * @cfg {String/Date[]} configprop.four
	 */

	foobar : "",
	constructor : function(config) {
		 
	

	},

	/**
	 * @param {Function} arg
	 * @param {String} arg.bar
	 * @param {Boolean} arg.zot
	 * @param {String} arg.return Returns String
	 */
	callbackEx : function(arg) {
		 
		this.callbackEx(function(bar, zot) {

		})
	},

	/**
	 * @param {Object} arg
	 * @param {String} arg.bar
	 * @param {Boolean} arg.zot
	 */
	optionsEx : function(arg) {
		 
	}

})