// 初回で現在地を取得して反映
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // const latitube = position.coords.latitude;
        // const longitude = position.coords.longitude;

        const latitube = 35.729897801283414;
        const longitude = 140.82745461426265;

        // LatLngは中心を指定するクラス
        const latlng = new google.maps.LatLng(latitube, longitude); //中心の緯度, 経度

        // new google.maps.Map で新規マップ作成
        // オプションでズームとか真ん中とか設定できる
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14, //ズームの調整
          center: latlng, // 中心の設定
        });

        // 地図上の赤いマーカーの場所
        new google.maps.Marker({
          position: latlng,
          map: map,
        });
      },
      function (error) {
        alert("エラーです！");
      }
    );
  } else {
    alert("このブウラウザは位置情報に対応していません。");
  }
}

const getNow = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const map = new google.maps.Map(document.getElementById("map"));

        // const latitube = position.coords.latitude;
        // const longitude = position.coords.longitude;

        const latitube = 35.65807414176383;
        const longitude = 139.70163623245122;

        const latlng = new google.maps.LatLng(latitube, longitude);

        const opts = {
          zoom: 14,
          center: latlng,
        };

        new google.maps.Marker({
          position: latlng,
          map: map,
        });

        // setOptionでオプションを上書き反映
        map.setOptions(opts);
      },
      function (error) {
        alert("エラーです！");
      }
    );
  } else {
    alert("このブウラウザは位置情報に対応していません。");
  }
};
