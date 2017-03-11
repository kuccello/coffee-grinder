"use strict"; // Strict mode makes it easier to write "secure" JavaScript. Strict mode changes previously accepted "bad syntax" into real errors.

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp(functions.config().firebase);

