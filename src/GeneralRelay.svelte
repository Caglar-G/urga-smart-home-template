<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  import { Cluster, Device } from "urgasmartlib";
  import type { DeviceInfo, Message } from "urgasmartlib";

  import { onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

  /*
  onMount(()=>{
    UrgaSmart.getDeviceInfo("")
  })*/

  let error:string = "";
  let device:Device;
  let deviceInfo:DeviceInfo|null = null;
  let onOffStatus:string="";

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

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
    }
  });

  function ColorChange(_status:string){
    let color = "grey";
    switch (_status) {
      case "ON":
        color = `#55B785`;
        break;
      case "OFF":
        color = `brown`;
        break;
      default:
        color = `grey`;
        break;
    }
    return `color:${color};`
  }

  function ToogleCommand(){
   
    device.command("0x0006", 0, "0x02", "" , (message:Message) => {
      //onOffStatus = message.payloadString;
      console.log("Gonderildi");
    });
  }

  //const spec = new Cluster("38d83101-e148-4a54-848b-faa5d074e481");

  //let switch1 = spec.ON_OFF("1",(self)=>{ switch1 = self;}); on:click={/*switch1.commands.Toggle*/} color={/*switch1.attributes.OnOff === "ON" ? "#55B785" : "#C33175"*/}
</script>

<main>
  <div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="m-auto w-fit" style="{ColorChange(onOffStatus)}" on:click={ToogleCommand}>
      <Fa icon={faPowerOff} size="8x" />
    </div>
  </div>
  {#if deviceInfo != null}
    <h1>{deviceInfo.deviceName}</h1>
    <h2>{onOffStatus}</h2>
  {/if}

  {#if error != ""}
    <div>{error}</div>
  {/if}

  <!--
  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
  -->
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
