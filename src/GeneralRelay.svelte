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
    if (app) {
      app.destroy(true, { children: true, texture: true});
    }
  });

  let offTexture:any;
  let onTexture:any;
  let lampSprite: PIXI.Sprite;
  let isOn = false;


  async function loadPixi() {
    /*
    offTexture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');
    onTexture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');*/
    const imgElement = document.getElementById('bulbOn')as HTMLImageElement;
    const imgElement2 = document.getElementById('bulbOff')as HTMLImageElement;

    let img1load = false;
    let img2load = false;
    imgElement.onload = () => {
      console.log("asdf")
      img1load = true;
      loadedImage();
    }
    imgElement2.onload = () => {
      console.log("asdf")
      img2load = true;
      loadedImage();
    }

    const loadedImage = async () => {
      if(img1load == false ){
        return;
      }
      if(img2load == false ){
        return;
      }     

      /*
       // Görseli bir canvas'a çevir
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    context?.drawImage(imgElement, 0, 0); // Görseli canvas'a çiz


    // Görseli bir canvas'a çevir
    const canvas2 = document.createElement('canvas');
    const context2 = canvas.getContext('2d');

    canvas2.width = imgElement2.width;
    canvas2.height = imgElement2.height;
    context2?.drawImage(imgElement2, 0, 0); // Görseli canvas'a çiz*/

   
    offTexture = PIXI.Texture.from(imgElement2);//await PIXI.Assets.load('/Bulb_OFF.png');
    onTexture = PIXI.Texture.from(imgElement);//await PIXI.Assets.load('/Bulb_ON.png');
    //PIXI.Texture.from('path/to/lamp-off.png');

    
    console.log("pixi start load")
    // Create a new application
    app = new PIXI.Application();

    // Initialize the application
    await app.init({ background: '#1099bb', resizeTo: window });

    // Append the application canvas to the document body
    document.body.appendChild(app.canvas);

    // Create and add a container to the stage
    const container = new PIXI.Container();

    app.stage.addChild(container);

    lampSprite = new PIXI.Sprite(offTexture);

    
    lampSprite.anchor.set(0.5);
    lampSprite.x = app.canvas.width / 2;
    lampSprite.y = app.canvas.height / 2;

    lampSprite.interactive = true;
    lampSprite.on('pointertap', toggleLamp);

    container.addChild(lampSprite);

    // Move the container to the center
    /*
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;*/

    // Listen for animate update
    app.ticker.add((time) =>
    {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        //container.rotation -= 0.01 * time.deltaTime;
    });


    }

    return;
    
   
  }

  function toggleLamp() {
    isOn = !isOn;
    lampSprite.texture = isOn ? onTexture : offTexture;
    lampSprite.anchor.set(0.5);
    lampSprite.x = app.canvas.width / 2;
    lampSprite.y = app.canvas.height / 2;
  }

    /*
    device.command("0x0006", 0, "0x02", "" , (message:Message) => {
      //onOffStatus = message.payloadString;
      console.log("Gonderildi");
    });*/
</script>

<main>
  <div bind:this={canvasContainer}></div>
  <img id="bulbOn" src="Bulb_ON.png" style="display: none;" />
  <img id="bulbOff" src="Bulb_OFF.png" style="display: none;" />
</main>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
