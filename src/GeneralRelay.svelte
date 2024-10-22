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
     
    });

    loadPixi();


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


  async function loadPixi() {
    console.log("pixi start load")
    // Create a new application
    const app = new PIXI.Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Create and add a container to the stage
    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Load the bunny texture
    const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');

    // Create a 5x5 grid of bunnies in the container
    for (let i = 0; i < 25; i++)
    {
        const bunny = new PIXI.Sprite(texture);

        bunny.x = (i % 5) * 40;
        bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    }

    // Move the container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((time) =>
    {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        container.rotation -= 0.01 * time.deltaTime;
    });
  }

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
