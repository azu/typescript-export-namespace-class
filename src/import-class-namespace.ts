"use strict";
import Hoge from "./export-class-namespace";
console.log(Hoge.A);
var hoge = new Hoge();
console.log(hoge.a);