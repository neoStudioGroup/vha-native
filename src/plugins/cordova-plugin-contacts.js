const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.contacts != 'undefined') {
          Vue.prototype.$vha.contacts = {
            save: function (contact, onSuccess, onError) {
              var deviceContact = window.navigator.contacts.create(contact);
              deviceContact.save(onSuccess, onError);
            },
      
            remove: function (contact, onSuccess, onError) {
              var deviceContact = window.navigator.contacts.create(contact);
              deviceContact.remove(onSuccess, onError);
            },
      
            clone: function (contact) {
              var deviceContact = window.navigator.contacts.create(contact);
              return deviceContact.clone(contact);
            },
            
            find: function (options, onSuccess, onError) {
              var fields = options.fields || ['id', 'displayName'];
              delete options.fields;
              if (Object.keys(options).length === 0) {
                window.navigator.contacts.find(fields, onSuccess, onError);
              }
              else {
                window.navigator.contacts.find(fields, onSuccess, onError, options);
              }
            },
            
            pickContact: function (onContact, onError) {
              window.navigator.contacts.pickContact(onContact, onError);
            }            
          }
        } else {
          throw "cordova-plugin-contacts"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha