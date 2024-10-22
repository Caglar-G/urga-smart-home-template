<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  import { Cluster, Device, Home } from "urgasmartlib";
  import type { DeviceInfo, Message } from "urgasmartlib";

  import { onDestroy, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
  import * as PIXI from 'pixi.js';

  /*
  onMount(()=>{
    UrgaSmart.getDeviceInfo("")
  })*/

  let error:string = "";
  const home:Home = new Home();
  let deviceInfoList:Array<DeviceInfo> = [];

  let canvasContainer: HTMLDivElement;
  let app: PIXI.Application;

  onMount(() => {

    home.getDevices((ev)=>{
      deviceInfoList = ev;
      for (const element of deviceInfoList) {
        console.log(JSON.stringify(element));
      }
      app = new PIXI.Application({
        width: 800,  // Canvas genişliği
        height: 600, // Canvas yüksekliği
        backgroundColor: 0x1099bb,
      });

      // PixiJS sahnesini DOM'a ekleyin
      canvasContainer.appendChild(app.view);

      // Bir grafik nesnesi ekleyelim (örnek)
      const circle = new PIXI.Graphics();
      circle.beginFill(0xff0000);
      circle.drawCircle(100, 100, 50);
      circle.endFill();

      // Çizilen nesneyi sahneye ekle
      app.stage.addChild(circle);
    });

    /*
    if (id) {
        // id varsa işlemler yap
        console.log("id bulundu", id);
        device = new Device(id);
        
        device.getDeviceInfo((_deviceInfo)=>{
          deviceInfo = _deviceInfo;
          console.warn("deviceInfo", deviceInfo);
        })

        device.attributeListen("0x0006", 0, "0x0000", (message:Message) => {
          onOffStatus = message.payloadString;
        });
        
    } else {
        // id yoksa alternatif bir işlem yap
        error = "id bulunamadi";
    }*/

  });

  onDestroy(() => {
    // Uygulama kapanırken temizle
    app.destroy(true, { children: true });
  });

    /*
    device.command("0x0006", 0, "0x02", "" , (message:Message) => {
      //onOffStatus = message.payloadString;
      console.log("Gonderildi");
    });*/
</script>

<main>
  <div bind:this={canvasContainer}></div>
</main>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
