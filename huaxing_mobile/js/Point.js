function Point(json){
    this.province = json.province;
    this.imgSrc = json.img;
    this.flag = false;
    this.init();
};
Point.prototype.init = function(){
    var self = this;
    this.img = new Image();
    this.img.src = this.imgSrc;
    this.img.onload = function(e){
        self.imgW = this.width;
        self.imgH = this.height;
        self.changePosition();
    };
    map.pointArr.push(this);
};
Point.prototype.changePosition = function(){
    if(this.province == "北京"){
        this.x = 520.5;
        this.y = 231;
    }
    else if(this.province == "河北"){
        this.x = 507.5;
        this.y = 263;
    }
    else if(this.province == "天津"){
        this.x = 536.5;
        this.y = 252;
    }
    else if(this.province == "辽宁"){
        this.x = 600.5;
        this.y = 203;
    }
    else if(this.province == "吉林"){
        this.x = 632.5;
        this.y = 203;
    }
    else if(this.province == "黑龙江"){
        this.x = 642.5;
        this.y = 103;
    }
    else if(this.province == "内蒙古"){
        this.x = 441.5;
        this.y = 226;
    }
    else if(this.province == "新疆"){
        this.x = 170.5;
        this.y = 184;
    }
    else if(this.province == "西藏"){
        this.x = 159.5;
        this.y = 354;
    }
    else if(this.province == "青海"){
        this.x = 267.5;
        this.y = 294;
    }
    else if(this.province == "甘肃"){
        this.x = 353.5;
        this.y = 272;
    }
    else if(this.province == "宁夏"){
        this.x = 394.5;
        this.y = 284;
    }
    else if(this.province == "陕西"){
        this.x = 437.5;
        this.y = 326;
    }
    else if(this.province == "山西"){
        this.x = 474.5;
        this.y = 282;
    }
    else if(this.province == "河南"){
        this.x = 494.5;
        this.y = 339;
    }
    else if(this.province == "山东"){
        this.x = 546.5;
        this.y = 292;
    }
    else if(this.province == "江苏"){
        this.x = 573.5;
        this.y = 337;
    }
    else if(this.province == "上海"){
        this.x = 601.5;
        this.y = 369;
    }
    else if(this.province == "浙江"){
        this.x = 591.5;
        this.y = 408;
    }
    else if(this.province == "安徽"){
        this.x = 546.5;
        this.y = 370;
    }
    else if(this.province == "湖北"){
        this.x = 479.5;
        this.y = 389;
    }
    else if(this.province == "重庆"){
        this.x = 410.5;
        this.y = 416;
    }
    else if(this.province == "四川"){
        this.x = 365.5;
        this.y = 384;
    }
    else if(this.province == "云南"){
        this.x = 327.5;
        this.y = 491;
    }
    else if(this.province == "贵州"){
        this.x = 409.5;
        this.y = 461;
    }
    else if(this.province == "湖南"){
        this.x = 475.5;
        this.y = 447;
    }
    else if(this.province == "江西"){
        this.x = 530.5;
        this.y = 439;
    }
    else if(this.province == "福建"){
        this.x = 563.5;
        this.y = 461;
    }
    else if(this.province == "广东"){
        this.x = 504.5;
        this.y = 505;
    }
    else if(this.province == "广西"){
        this.x = 434.5;
        this.y = 508;
    }
    else if(this.province == "澳门"){
        this.x = 494.5;
        this.y = 529;
    }
    else if(this.province == "香港"){
        this.x = 516.5;
        this.y = 521;
    }
    else if(this.province == "海南"){
        this.x = 452.5;
        this.y = 578;
    }
    else if(this.province == "台湾"){
        this.x = 614.5;
        this.y = 500;
    }
    

};
Point.prototype.update = function(){

};
Point.prototype.render = function(){
    map.ctx.drawImage(map.pointImg, this.x - 11.5, this.y - 11.5 , 13,16);
    map.ctx.save();
    map.ctx.font = "18px MicroSoft Yahei";
    map.ctx.fillStyle = "red";
    map.ctx.fillText(this.province , this.x + 13.5, this.y + 2.5);
    map.ctx.restore();
    if(this.flag){
        map.ctx.drawImage(this.img, this.x - this.imgW/2, this.y - this.imgH - 20, this.imgW,this.imgH);
    }
};