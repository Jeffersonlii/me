import { Subject } from "rxjs";

//general
export const $openWindow = new Subject<{
  child: React.ReactNode;
  params?: { [key: string]: any };
}>(); //todo

//header functions
export const $audioToggle = new Subject<void>();
export const $videoToggle = new Subject<void>();
export const $removeAllWindows = new Subject<void>();
export const $toggleOS = new Subject<void>();
