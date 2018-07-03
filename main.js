
navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // ここから、IndexedDB にデータを書き込んだり、いずれかのウィンドウに
        // それを送信したり、通知を表示したりできます。
      }, function(error) {
        // 開発中は、コンソールにエラーを表示するのに役立ちます。
        // 本番環境では、アプリケーションサーバにエラー情報を送信
        // するためにも 役立ちます。
        console.log(error);
      }
    );
  }
);
