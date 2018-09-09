const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.contacts != 'undefined') {
          Vue.prototype.$vha.contacts = {
            save: function (contact, onSuccess, onError) {
              var deviceContact = navigator.contacts.create(contact);
              deviceContact.save(onSuccess, onError);
            },
      
            remove: function (contact, onSuccess, onError) {
              var deviceContact = navigator.contacts.create(contact);
              deviceContact.remove(onSuccess, onError);
            },
      
            clone: function (contact) {
              var deviceContact = navigator.contacts.create(contact);
              return deviceContact.clone(contact);
            },
            
            find: function (options, onSuccess, onError) {
              var fields = options.fields || ['id', 'displayName'];
              delete options.fields;
              if (Object.keys(options).length === 0) {
                navigator.contacts.find(fields, onSuccess, onError);
              }
              else {
                navigator.contacts.find(fields, onSuccess, onError, options);
              }
            },
            
            pickContact: function (onContact, onError) {
              navigator.contacts.pickContact(onContact, onError);
            }            
          }
        } else {
          throw "cordova-plugin-contacts undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha