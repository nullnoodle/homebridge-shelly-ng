import {
  ShellyPlusUNI,
} from 'shellies-ng';


import { DeviceDelegate } from './base';

/**
 * Handles Shelly Plus UNI devices.
 */
export class ShellyPlusUNIDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyPlusUNI;

    this.addSwitch(d.switch0, { single: true });
    // this.addSwitch(d.switch1, { single: true });
  }
}

DeviceDelegate.registerDelegate(
  ShellyPlusUNIDelegate,
  ShellyPlusUNI,
);
