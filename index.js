// jQuery
import $ from 'jquery';

// CanJS
import can from 'can';
import AppViewModel from 'app';
import "can/route/pushstate/pushstate";

// Bootstrap
import bootstrap from 'bootstrap';
import css_bootstrap from 'bootstrap.css!';

// Components
import 'components/page-employee/';
import index_template from 'index.stache!';
//import 'index.less!'; //Not used currently


// Create an instance of AppViewModel (appViewModel)
var appViewModel = new AppViewModel({});

// Make appState the route's internal can.Map
can.route.map(appViewModel);

// Each element that will be set on the app-state must be preceded by a colon
// Also, set a default value for page (the login page)
can.route(':page');
can.route(':page/:color');

// Initialize routing
can.route.ready();

// Render the base application
// Link appState to index.stache
$(document.body).append(index_template(appViewModel));
