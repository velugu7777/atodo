import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';


var App;

Ember.MODEL_FACTORY_INJECTIONS = true;



App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.ApplicationSerializer = DS.LSSerializer.extend();

loadInitializers(App, config.modulePrefix);

export default App;
