// register
function registerServiceWorker() {
  return navigator.serviceWorker.register('./serviceworker.js').then(
    function(serviceWorkerRegistration) {
      return serviceWorkerRegistration
    }
  )
}

// permission
function askPermission() {
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
  });
}

var registration = registerServiceWorker()
var permission = askPermission()

// registration.pushManager.subscribe().then(
//   function(pushSubscription) {
//     console.log(pushSubscription.subscriptionId);
//     console.log(pushSubscription.endpoint);
//     // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
//     // それを送信したり、通知を表示したりできます。
//   }, function(error) {
//     // 開発中は、コンソールにエラーを表示するのに役立ちます。
//     // 本番環境では、アプリケーションサーバにエラー情報を送信
//     // するためにも 役立ちます。
//     console.log(error);
//   }
// );

