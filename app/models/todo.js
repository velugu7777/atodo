import DS from 'ember-data';

export default DS.Model.extend({

  name:DS.attr('string'),
  isCompleted:DS.attr('boolean'),
  isVisible: DS.attr('boolean'),
  
});
