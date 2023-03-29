mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWtpdGEiLCJhIjoiY2xhdWI1bXN6MDR4bjNxcGp2ZmN0aTUzdyJ9.hhWaCziavbCrU0_t-aPNiw';
		var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', 
            center: [136.5717733, 36.4852911],
            zoom: 16.0 // starting zoom
		});
        
		mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
		map.addControl(new MapboxLanguage({
        defaultLanguage: 'ja'
		}));

//八束穂キャンパスに移動
document.getElementById("ytkh-btn").addEventListener("click", function() {
    console.log("八束穂キャンパスに移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.5717733, 36.4855833],
        zoom: 16.0 // starting zoom
    });
});

//現在地に移動
document.getElementById("curloca-btn").addEventListener("click", function() {
    console.log("現在地取得");
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
            //　位置取得に成功したとき
            function geoSuccess(event) {
                console.log("現在地取得成功");
                const lat = event.coords["latitude"];
                const lng = event.coords["longitude"];
                map.flyTo({ center: [lng, lat] });

            }
            // 位置取得に失敗したとき
            function geoError(event) {
                alert("位置取得失敗:" + event.code); 
            }
            
});


//人間情報システム研究所（60号館）をマップで表示
document.getElementById("HIS_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("人間情報システム研究所（60号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.5710455096167, 36.48753005392554],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.5710455096167, 36.48753005392554]
        },
        properties: {
            title: '人間情報システム研究所（60号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '60・205 小島 正己 研究室',
            lab_2: '60・211 曽我部 正博 研究室',
            lab_3: '60・206 辰巳 仁史 研究室',
            lab_4: '60・214 野村 一樹 研究室',
            lab_5: '60・209 樋口 正法 研究室',
            lab_6: '60・210 平田 宏聡 研究室'
        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/wwwr/lab/HIS/description/description_introduction.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>`
        )
    )
    .addTo(map);
    }
});
//ゲノム生物工学研究所（63号館）をマップで表示
document.getElementById("Genome_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("ゲノム生物工学研究所（63号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57180141242833, 36.487366343976134],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57180141242833, 36.487366343976134]
        },
        properties: {
            title: 'ゲノム生物工学研究所（63号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '63・309 大澤 敏 研究室',
            lab_2: '63・209 尾関 健二 研究室',
            lab_3: '63・107 小田 忍 研究室',
            lab_4: '63・303 小野 慎 研究室',
            lab_5: '63・203 相良 純一 研究室',
            lab_6: '63・207 佐野 元昭 研究室',
            lab_7: '63・307 谷田 育宏 研究室',
            lab_8: '63・205 堂本 光子 研究室',
            lab_9: '63・103 袴田 佳宏 研究室',
            lab_10: '63・312 町田 雅之 研究室',
            lab_11: '63・105 松本 恵 研究室',
            lab_12: '63・305 吉村 治 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/gbl/laboratoryOutline.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>`
        )
    )
    .addTo(map);
    }
});

//材料システム研究所（61号館）をマップで表示
document.getElementById("MateSys_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("材料システム研究所（61号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57149839886685, 36.48710492175708],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57149839886685, 36.48710492175708]
        },
        properties: {
            title: '材料システム研究所（61号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '61・202 影山 和郎 研究室',
            lab_2: '61・208 岸 陽一 研究室',
            lab_3: '61・211 草野 英二 研究室',
            lab_4: '61・219 近藤 泰光 研究室',
            lab_5: '61・218 竹井 義法 研究室',
            lab_6: '61・209 中田 政之 研究室',
            lab_7: '61・216 南戸 秀仁 研究室',
            lab_8: '61・210 福江 高志 研究室',
            lab_9: '61・213 宮野 靖 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/MSRL/description/description_introduction.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>`
        )
    )
    .addTo(map);
    }
});
//高信頼理工学研究センター（61号館）をマップで表示
document.getElementById("HRS61_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("高信頼理工学研究センター（61号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.5712643667008, 36.48690869960131],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.5712643667008, 36.48690869960131]
        },
        properties: {
            title: '高信頼理工学研究センター（61号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '61・202 影山 和郎 研究室',
            lab_2: '61・208 岸 陽一 研究室',
            lab_3: '61・211 草野 英二 研究室',
            lab_4: '61・219 近藤 泰光 研究室',
            lab_5: '61・218 竹井 義法 研究室',
            lab_6: '61・209 中田 政之 研究室',
            lab_7: '61・216 南戸 秀仁 研究室',
            lab_8: '61・210 福江 高志 研究室',
            lab_9: '61・213 宮野 靖 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/MSRL/description/description_introduction.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>`
        )
    )
    .addTo(map);
    }
});
//先端材料創製技術研究所（62号館）をマップで表示
document.getElementById("IoAM_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("先端材料創製技術研究所（62号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.572086256212, 36.48685965167226],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.572086256212, 36.48685965167226]
        },
        properties: {
            title: '先端材料創製技術研究所（62号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '62・221 大嶋 俊一 研究室',
            lab_2: '62・211 加藤 秀治 研究室',
            lab_3: '62・210 坂本 重彦 研究室',
            lab_4: '62・216 坂本 宗明 研究室',
            lab_5: '62・215 鈴木 保任 研究室',
            lab_6: '62・212 瀬川 明夫 研究室',
            lab_7: '62・209 高野 則之 研究室',
            lab_8: '62・217 田中 基嗣 研究室',
            lab_9: '62・214 林 晃生 研究室',
            lab_10: '62・208 森本 喜隆 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/mplab/description/description_introduction.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>`
        )
    )
    .addTo(map);
    }
});
//医工融合技術研究所（62号館）をマップで表示
document.getElementById("IoBER_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("医工融合技術研究所（62号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57208758383567, 36.48685924270601],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57208758383567, 36.48685924270601]
        },
        properties: {
            title: '医工融合技術研究所（62号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '62・221 大嶋 俊一 研究室',
            lab_2: '62・211 加藤 秀治 研究室',
            lab_3: '62・210 坂本 重彦 研究室',
            lab_4: '62・216 坂本 宗明 研究室',
            lab_5: '62・215 鈴木 保任 研究室',
            lab_6: '62・212 瀬川 明夫 研究室',
            lab_7: '62・209 高野 則之 研究室',
            lab_8: '62・217 田中 基嗣 研究室',
            lab_9: '62・214 林 晃生 研究室',
            lab_10: '62・208 森本 喜隆 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/wwwr/lab/mse/description/description_introduction.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>`
        )
    )
    .addTo(map);
    }
});
//生活環境研究所（62号館）をマップで表示
document.getElementById("ILE_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("生活環境研究所（62号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57155917189968, 36.48661946771765],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57155917189968, 36.48661946771765]
        },
        properties: {
            title: '生活環境研究所（62号館）',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '62・221 大嶋 俊一 研究室',
            lab_2: '62・211 加藤 秀治 研究室',
            lab_3: '62・210 坂本 重彦 研究室',
            lab_4: '62・216 坂本 宗明 研究室',
            lab_5: '62・215 鈴木 保任 研究室',
            lab_6: '62・212 瀬川 明夫 研究室',
            lab_7: '62・209 高野 則之 研究室',
            lab_8: '62・217 田中 基嗣 研究室',
            lab_9: '62・214 林 晃生 研究室',
            lab_10: '62・208 森本 喜隆 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>`
        )
    )
    .addTo(map);
    }
});
//高信頼理工学研究センター（64号館）をマップで表示
document.getElementById("HRS64_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("高信頼理工学研究センター（64号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57192029727614, 36.48639401687291],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57192029727614, 36.48639401687291]
        },
        properties: {
            title: '高信頼理工学研究センター（64号館）',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '64・209 池永 訓昭 研究室',
            lab_2: '64・217 遠藤 和弘 研究室',
            lab_3: '64・214 岡田 豪 研究室',
            lab_4: '64・204 金原 勲 研究室',
            lab_5: '64・208 斉藤 博嗣 研究室',
            lab_6: '64・211 瀬戸 雅宏 研究室',
            lab_7: '64・219 山部 昌 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>`
        )
    )
    .addTo(map);
    }
});
//情報技術AI研究所（67号館）をマップで表示
document.getElementById("ITAL_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("情報技術AI研究所（67号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57171796581932, 36.48493045543724],
        zoom: 18.4 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57171796581932, 36.48493045543724]
        },
        properties: {
            title: '情報技術AI研究所（67号館）',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '67・124 石橋　孝一 研究室',
            lab_2: '67・205 郭　清蓮 研究室',
            lab_3: '67・301 鎌田　洋 研究室',
            lab_4: '67・325 河並　崇 研究室',
            lab_5: '67・124 金道　敏樹 研究室',
            lab_6: '67・121 黒瀨　浩 研究室',
            lab_7: '67・312 坂　知樹 研究室',
            lab_8: '67・317 坂本　真仁 研究室',
            lab_9: '67・203 佐野　渉二 研究室',
            lab_10: '67・125 千石　靖 研究室',
            lab_11: '67・311 鷹合　大輔 研究室',
            lab_12: '67・202 中沢　実 研究室',
            lab_13: '67・112 中沢　憲二 研究室',
            lab_14: '67・309 長田　茂美 研究室',
            lab_15: '67・321 林　亮子 研究室',
            lab_16: '67・106 松井　くにお 研究室',
            lab_17: '67・306 元木　光雄 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>
            <div>${marker.properties.lab_13}</div>
            <div>${marker.properties.lab_14}</div>
            <div>${marker.properties.lab_15}</div>
            <div>${marker.properties.lab_16}</div>
            <div>${marker.properties.lab_17}</div>`
        )
    )
    .addTo(map);
    }
});

//感動デザイン工学研究所（68号館）をマップで表示
document.getElementById("IoIDE_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("感動デザイン工学研究所（68号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57131970241323, 36.48418829754274],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57131970241323, 36.48418829754274]
        },
        properties: {
            title: '感動デザイン工学研究所（68号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '68・230、68・104 石川 健介 研究室',
            lab_2: '68・227 石黒 千晶 研究室',
            lab_3: '68・221 石原 由貴 研究室',
            lab_4: '68・204 出原 立子 研究室',
            lab_5: '68・219 伊丸岡 俊秀 研究室',
            lab_6: '68・207 浦 正広 研究室',
            lab_7: '68・310 江村 伯夫 研究室',
            lab_8: '68・220 加藤 樹里 研究室',
            lab_9: '68・102、68・213 神宮 英夫 研究室',
            lab_10: '68・223 高野 佐代子 研究室',
            lab_11: '68・215 田中 吉史 研究室',
            lab_12: '68・307 田中 孝治 研究室',
            lab_13: '68・210 根岸 一平 研究室',
            lab_14: '68・225 松下 裕 研究室',
            lab_15: '68・231 村山 祐子 研究室',
            lab_16: '68・305 山田 真司 研究室',
            lab_17: '68・312 山本 知仁 研究室',
            lab_18: '68・217 渡邊 伸行 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/ade/description/description_introduction.html" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>
            <div>${marker.properties.lab_13}</div>
            <div>${marker.properties.lab_14}</div>
            <div>${marker.properties.lab_15}</div>
            <div>${marker.properties.lab_16}</div>
            <div>${marker.properties.lab_17}</div>
            <div>${marker.properties.lab_18}</div>`
        )
    )
    .addTo(map);
    }
});
//地域防災環境科学研究所（69号館）をマップで表示
document.getElementById("IoGDPE_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("地域防災環境科学研究所（69号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57168690108844, 36.48414158568831],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57168690108844, 36.48414158568831]
        },
        properties: {
            title: '地域防災環境科学研究所（69号館）',
            lab_info: '研究所説明',
            lab_No_info: '同棟所属の教員研究室一覧',

            //ここから
            lab_1: '69・309 有田 守 研究室',
            lab_2: '69・307 片桐 由希子 研究室',
            lab_3: '69・316 川村 國夫 研究室',
            lab_4: '69・320 木村 定雄 研究室',
            lab_5: '69・311 後藤 正美 研究室',
            lab_6: '69・330 佐藤 弘美 研究室',
            lab_7: '69・318 須田 達 研究室',
            lab_8: '69･416 高原 利幸 研究室',
            lab_9: '69・306 田中 泰司 研究室',
            lab_10: '69・322 垂水 弘夫 研究室',
            lab_11: '69・211 土田 義郎 研究室',
            lab_12: '69・207 永野 紳一郎 研究室',
            lab_13: '69・204 西村 督 研究室',
            lab_14: '69・209 花岡 大伸 研究室',
            lab_15: '69・414 円井 基史 研究室',
            lab_16: '69・302 宮里 心一 研究室',
            lab_17: '69・206 山岸 邦彰 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://wwwr.kanazawa-it.ac.jp/ides/" target="_blank">${marker.properties.lab_info}</a>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>
            <div>${marker.properties.lab_13}</div>
            <div>${marker.properties.lab_14}</div>
            <div>${marker.properties.lab_15}</div>
            <div>${marker.properties.lab_16}</div>
            <div>${marker.properties.lab_17}</div>`
        )
    )
    .addTo(map);
    }
});
//生体機構制御技術研究所（73号館）をマップで表示
document.getElementById("IoBCT_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("生体機構制御技術研究所（73号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57280285239142, 36.48401257813536],
        zoom: 18.5 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57280285239142, 36.48401257813536]
        },
        properties: {
            title: '生体機構制御技術研究所（73号館）',
            lab_No_info: '同棟所属の教員研究室一覧',

            //ここから
            lab_1: '73・205-3 太田　和彦 研究室',
            lab_2: '73・204 佐藤　隆一 研究室',
            lab_3: '73・205-2 十河　憲夫 研究室',
            lab_4: '73・205-1 土居　隆宏 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>`
        )
    )
    .addTo(map);
    }
});
//FMT研究所（74号館）をマップで表示
document.getElementById("FMT_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("FMT研究所（74号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57361799124627, 36.48349496609007],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57361799124627, 36.48349496609007]
        },
        properties: {
            title: 'FMT研究所（74号館）',
            lab_No_info: '同棟所属の教員研究室一覧',

            //ここから
            lab_1: '74・107 赤坂　剛史 研究室',
            lab_2: '74・218 畝田　道雄 研究室',
            lab_3: '74・126 岡本　正人 研究室',
            lab_4: '74・305 小栗　和幸 研究室',
            lab_5: '74・319 小暮　潔 研究室',
            lab_6: '74・303 佐々木　大輔 研究室',
            lab_7: '74・215 佐藤　恵一 研究室',
            lab_8: '74・219 杉本　康弘 研究室',
            lab_9: '74・217 諏訪部　仁 研究室',
            lab_10: '74・205 出村　公成 研究室',
            lab_11: '74・306 廣瀬　康夫 研究室',
            lab_12: '74・317 藤木　信彰 研究室',
            lab_13: '74・216 藤本　雅則 研究室',
            lab_14: '74・304 吉田　啓史郎 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>
            <div>${marker.properties.lab_13}</div>
            <div>${marker.properties.lab_14}</div>`
        )
    )
    .addTo(map);
    }
});
//航空システム工学研究所（74号館）をマップで表示
document.getElementById("ASEL_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("航空システム工学研究所（74号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.5736180816365, 36.48349317845913],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.5736180816365, 36.48349317845913]
        },
        properties: {
            title: '航空システム工学研究所（74号館）',
            lab_No_info: '同棟所属の教員研究室一覧',

            //ここから
            lab_1: '74・107 赤坂　剛史 研究室',
            lab_2: '74・218 畝田　道雄 研究室',
            lab_3: '74・126 岡本　正人 研究室',
            lab_4: '74・305 小栗　和幸 研究室',
            lab_5: '74・319 小暮　潔 研究室',
            lab_6: '74・303 佐々木　大輔 研究室',
            lab_7: '74・215 佐藤　恵一 研究室',
            lab_8: '74・219 杉本　康弘 研究室',
            lab_9: '74・217 諏訪部　仁 研究室',
            lab_10: '74・205 出村　公成 研究室',
            lab_11: '74・306 廣瀬　康夫 研究室',
            lab_12: '74・317 藤木　信彰 研究室',
            lab_13: '74・216 藤本　雅則 研究室',
            lab_14: '74・304 吉田　啓史郎 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>
            <div>${marker.properties.lab_13}</div>
            <div>${marker.properties.lab_14}</div>`
        )
    )
    .addTo(map);
    }
});
//KIT×KAJIMA 3D Printing Lab（74号館）をマップで表示
document.getElementById("KxK3DP_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("KIT×KAJIMA 3D Printing Lab（74号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.5736180816365, 36.48349317845913],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.5736180816365, 36.48349317845913]
        },
        properties: {
            title: 'KIT×KAJIMA 3D Printing Lab（74号館）',
            lab_No_info: '同棟所属の教員研究室一覧',

            //ここから
            lab_1: '74・107 赤坂　剛史 研究室',
            lab_2: '74・218 畝田　道雄 研究室',
            lab_3: '74・126 岡本　正人 研究室',
            lab_4: '74・305 小栗　和幸 研究室',
            lab_5: '74・319 小暮　潔 研究室',
            lab_6: '74・303 佐々木　大輔 研究室',
            lab_7: '74・215 佐藤　恵一 研究室',
            lab_8: '74・219 杉本　康弘 研究室',
            lab_9: '74・217 諏訪部　仁 研究室',
            lab_10: '74・205 出村　公成 研究室',
            lab_11: '74・306 廣瀬　康夫 研究室',
            lab_12: '74・317 藤木　信彰 研究室',
            lab_13: '74・216 藤本　雅則 研究室',
            lab_14: '74・304 吉田　啓史郎 研究室'

        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>
            <div>${marker.properties.lab_2}</div>
            <div>${marker.properties.lab_3}</div>
            <div>${marker.properties.lab_4}</div>
            <div>${marker.properties.lab_5}</div>
            <div>${marker.properties.lab_6}</div>
            <div>${marker.properties.lab_7}</div>
            <div>${marker.properties.lab_8}</div>
            <div>${marker.properties.lab_9}</div>
            <div>${marker.properties.lab_10}</div>
            <div>${marker.properties.lab_11}</div>
            <div>${marker.properties.lab_12}</div>
            <div>${marker.properties.lab_13}</div>
            <div>${marker.properties.lab_14}</div>`
        )
    )
    .addTo(map);
    }
});
//革新複合材料研究開発センター（75号館）をマップで表示
document.getElementById("ICRDC_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("革新複合材料研究開発センター（75号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57256674729388, 36.48344765754516],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57256674729388, 36.48344765754516]
        },
        properties: {
            title: '革新複合材料研究開発センター（75号館）',
            lab_info: '研究所説明',
        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <a href="https://www.icc-kit.jp/" target="_blank">${marker.properties.lab_info}</a>`
        )
    )
    .addTo(map);
    }
});
//八束穂事務室（65号館）をマップで表示
document.getElementById("BOSSROOM_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("八束穂事務室（65号館）へ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.57117169713018, 36.48454922459883],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.57117169713018, 36.48454922459883]
        },
        properties: {
            title: '八束穂事務室（65号館）',
            lab_No_info: '同棟所属の教員研究室一覧',
            lab_1: '65・210 阿部　倫之 研究室'
        }
        }
    ]
    };
    
    // add markers to map
for (const marker of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${marker.properties.title}</div>
            <div style="font-weight:bold">${marker.properties.lab_No_info}</div>
            <div>${marker.properties.lab_1}</div>`
        )
    )
    .addTo(map);
    }
});
//Restaurant ENERGYをマップで表示
document.getElementById("RE_lab").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
    console.log("Restaurant ENERGYへ移動");
        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [136.5717735208968, 36.48672283486261],
        zoom: 18.0 // starting zoom
    });
    const geojson = {
        type: 'FeatureCollection',
        features: [
        {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [136.5717735208968, 36.48672283486261]
        },
        properties: {
            title: 'Restaurant ENERGY',
            lab_info: '【HP】ENERGY（レストラン） - KITEAGLE`SFUN',
            lab_No_info: '営業時間',
        
            Bus_nomal: '通常営業時間',
            Bus_Sdlb: '学生長期休暇中',
        
            weekday: '平日',
            weekday_lunch: '昼食 11:00～15:00',
            Sdlb_lunch: '昼食 10:00～13:30',
            wk_dinner: '夕食 16:30~20:00',
        
            Sat: '土曜日',
            Sat_lunch: '昼食 10:00～13:00',
            Sdlb_sat_lunch:'昼食 11:00～13:00'
        }
        }
        ]
        };
        
        // add rests to map
        for (const rest of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'rest';
        
        // make a rest for each feature and add to the map
        new mapboxgl.Marker(el).setLngLat(rest.geometry.coordinates).addTo(map);
        
        new mapboxgl.Marker(el)
        .setLngLat(rest.geometry.coordinates)
        .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
            `<div class="popup-title">${rest.properties.title}</div>
            <a href="https://www.kit-group.jp/pages/114/" target="_blank">${rest.properties.lab_info}</a>
            <div style="font-weight:bold">${rest.properties.lab_No_info}</div>
            <table align="center">
                <tr>
                    <th>${rest.properties.Bus_nomal}</th>
                    <th>${rest.properties.Bus_Sdlb}</th>
                </tr>
            </table>
            <div>${rest.properties.weekday}</div>
            <table align="center">
                <tr>
                    <th>${rest.properties.weekday_lunch}</th>
                    <th>${rest.properties.Sdlb_lunch}</th>
                </tr>
                <tr>
                    <th>${rest.properties.wk_dinner}</th>
                    <th></th>
                </tr>
            </table>
            <div>${rest.properties.Sat}</div>
            <table align="center">
                <tr>
                    <th>${rest.properties.Sat_lunch}</th>
                    <th>${rest.properties.Sdlb_sat_lunch}</th>
                </tr>
                <tr>
                    <th></th>
                    <th>(日・祝日休み）</th>
                </tr>
            </table>`
        )
        )
        .addTo(map);
        }
        });

//トップに推移
document.getElementById("Upper").addEventListener("click", function() {
    window.scroll({top: 0, behavior: 'smooth'});
});

// マップのコントローラを追加
map.addControl(new mapboxgl.NavigationControl());




