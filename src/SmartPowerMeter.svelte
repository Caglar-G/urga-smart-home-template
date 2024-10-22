<script lang="ts">
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import Counter from './lib/Counter.svelte'
  
    import { Cluster, Device } from "urgasmartlib";
    import type { DeviceInfo, Message } from "urgasmartlib";
  
    import { onMount } from 'svelte';
    import Fa from 'svelte-fa';
    import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
  
   
  
    let error:string = "";
    let device:Device;
    let deviceInfo:DeviceInfo|null = null;
    let activeCurrent_0:string="";
    let activeCurrent_1:string="";
    let activeCurrent_2:string="";
    let activeCurrent_3:string="";
    let activeCurrent_4:string="";
    let activeCurrent_5:string="";


  
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

        device.attributeListen("0x0090", 0, "0x0005", (message:Message) => {
            activeCurrent_0 = message.payloadString;
        });
        device.attributeListen("0x0090", 1, "0x0005", (message:Message) => {
            activeCurrent_1 = message.payloadString;
        });
        device.attributeListen("0x0090", 2, "0x0005", (message:Message) => {
            activeCurrent_2 = message.payloadString;
        });
        device.attributeListen("0x0090", 3, "0x0005", (message:Message) => {
            activeCurrent_3 = message.payloadString;
        });
        device.attributeListen("0x0090", 4, "0x0005", (message:Message) => {
            activeCurrent_4 = message.payloadString;
        });
        device.attributeListen("0x0090", 5, "0x0005", (message:Message) => {
            activeCurrent_5 = message.payloadString;
        });

        /*
        const spec = new Cluster(id);
  
        let probe1 = spec.Electrical_Measurement("1",(self)=>{ probe1 = self;});
        let probe2 = spec.Electrical_Measurement("2",(self)=>{ probe2 = self;});
        let probe3 = spec.Electrical_Measurement("3",(self)=>{ probe3 = self;});
        let probe4 = spec.Electrical_Measurement("4",(self)=>{ probe4 = self;});
        let probe5 = spec.Electrical_Measurement("5",(self)=>{ probe5 = self;});
        let probe6 = spec.Electrical_Measurement("6",(self)=>{ probe6 = self;});
        */

          
      } else {
          // id yoksa alternatif bir işlem yap
          error = "id bulunamadi";
          const testVal:DeviceInfo = {
            deviceName:"Test Cihazi"
          } 
          deviceInfo= testVal;
      }
    });
  
  
    
  </script>
  
  <main class="mainContainer">
    
    {#if deviceInfo != null}
    
        <h3 class="mt-5 h3">{deviceInfo.deviceName}</h3>
        <div class="flex flex-col h-[100%]">
            <div class="line h-[60%]">
                <div class="flex flex-col justify-around h-full">
                    <div class="flex flex-col items-start">
                        <div>Probe 1</div>
                        <div>
                            <span class="valProbe">{activeCurrent_0}</span>
                            <span class="valProbeUnit">A</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div>Probe 3</div>
                        <div>
                            <span class="valProbe">{activeCurrent_2}</span>
                            <span class="valProbeUnit">A</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div>Probe 5</div>
                        <div>
                            <span class="valProbe">{activeCurrent_4}</span>
                            <span class="valProbeUnit">A</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-around h-full">
                    <div class="flex flex-col items-start">
                        <div>Probe 2</div>
                        <div>
                            <span class="valProbe">{activeCurrent_1}</span>
                            <span class="valProbeUnit">A</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div>Probe 4</div>
                        <div>
                            <span class="valProbe">{activeCurrent_3}</span>
                            <span class="valProbeUnit">A</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-start">
                        <div>Probe 6</div>
                        <div>
                            <span class="valProbe">{activeCurrent_5}</span>
                            <span class="valProbeUnit">A</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-evenly items-start h-[40%]">
                <div>
                    <span class="bottomHeaders">Toplam:</span>
                    <span class="valProbe">0.05</span>
                    <span class="valProbeUnit">Kw</span>
                </div>
                <div>
                    <span class="bottomHeaders">Son 24S:</span>
                    <span class="valProbe">0.05</span>
                    <span class="valProbeUnit">Kw</span>
                </div>
                <div>
                    <span class="bottomHeaders">Son 30G:</span>
                    <span class="valProbe">0.05</span>
                    <span class="valProbeUnit">Kw</span>
                </div>
            </div>
        </div>
    {:else} 
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
    .mainContainer {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 4px;
        gap: 5px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .line {
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    .bottomHeaders{
        font-size: 2.1em;
        line-height: 0.9em;
        font-weight: bolder;
    }

    .valProbe {
        font-size: 2.1em;
        line-height: 0.9em;
    }

    .valProbeUnit {
        font-size: 2.1em;
        line-height: 0.9em;
        font-weight: bolder;
    }

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
  