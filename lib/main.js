/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * Contributor(s):
 *   Erik Vold <erikvvold@gmail.com> (Original Author)
 *
 * ***** END LICENSE BLOCK ***** */

var tabs = require("tabs");
var contextMenu = require("context-menu");

exports.main = function() {
  contextMenu.Item({
    label: "View Page Source in Tab",
    context: contextMenu.PageContext(),
    contentScript: 'on("click", function() postMessage(window.location.href));',
    onMessage: function(url) tabs.open({url: "view-source:" + url})
  });
}
