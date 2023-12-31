
(function () {
  const APP_ID = '7A56CE36-516B-703D-FF7F-EE112BA98200';
  const API_KEY = 'E9D221DE-A7E2-4F3A-8457-F81F67F70878';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);

  const testTableStore = Backendless.Data.of('TestTable');

  const $createObjStatusMsg = document.getElementById('create-obj-status');
  const $modifierPanel = document.getElementById('modifier-panel');
  const $currentValue = document.getElementById('current-value');
  const $input = document.getElementById('input');
  const $updateBtn = document.getElementById('update-btn');

  function createObject() {
    return testTableStore.save({ foo: 'Hello World' })
      .then(function (object) {
        $createObjStatusMsg.classList.add('text-success');
        $createObjStatusMsg.innerText = 'Object has been saved in real-time database';

        return object;
      })
      .catch(function (error) {
        $createObjStatusMsg.classList.add('text-danger');
        $createObjStatusMsg.innerText = error.message;

        throw error;
      });
  }

  function updateObjectValue(object) {
    $currentValue.innerText = object.foo
  }

  function subscribeOnObjectChanges(object) {
    testTableStore.rt().addUpdateListener("objectId = '" + object.objectId + "'", updateObjectValue);
  }

  function onEnter(callback) {
    return function onKeyPress(e) {
      if (e.keyCode === 13) {//Enter key
        callback()
      }
    }
  }

  function onObjectCreate(object) {
    $modifierPanel.classList.remove('d-none');

    $updateBtn.addEventListener('click', saveObject);
    $input.addEventListener('keypress', onEnter(saveObject));

    updateObjectValue(object);
    subscribeOnObjectChanges(object);

    function saveObject() {
      object.foo = $input.value;

      $input.value = '';

      testTableStore.save(object);
    }
  }

  createObject().then(onObjectCreate)
})();


                