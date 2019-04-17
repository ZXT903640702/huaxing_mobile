function Map(){
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.w = 709;
    this.h = 602;
    this.timer = null;
    this.pointArr = [];
    this.init();
    this.eventBind();
    this.setTimer();
};
Map.prototype.init = function(){
    var self = this;
    var sum = 0;
    this.bgImg = new Image();
    this.bgImg.src = "./img/communityMap.jpg";
    this.bgImg.onload = function(){
        sum++;
        if(sum == 2){
            self.setTimer();
        };
    };
    this.pointImg = new Image();
    this.pointImg.src = "./img/mapPoint.png";
    this.pointImg.onload = function(){
        sum++;
        if(sum == 2){
            self.setTimer();
        };
    };
};
Map.prototype.eventBind = function(){
    var self = this;
    this.canvas.ontouchstart = function(event){
        var event = event.touches[0];
        var rect = this.getBoundingClientRect();
        var x = (event.clientX - rect.left) * (this.width / rect.width);
        var y = (event.clientY - rect.top) * (this.height / rect.height);
        for(var i = 0 ; i < self.pointArr.length; i++){
            if(x > self.pointArr[i].x - 15 && x < self.pointArr[i].x + 63.5 && y > self.pointArr[i].y - 15 && y < self.pointArr[i].y + 23.5){
                self.pointArr[i].flag = true;
            }else{
                self.pointArr[i].flag = false;
            };
        };
    };
};
Map.prototype.setTimer = function(){
    var self = this;
    this.timer = setInterval(function(){
        self.ctx.clearRect(0,0,self.w,self.h);
        self.ctx.drawImage(self.bgImg , 0 , 0 , self.w , self.h);
        for(var i = 0; i < self.pointArr.length; i++){
            self.pointArr[i].render();
            if(i == 0){
                continue;
            }else{
                // var x1 = self.pointArr[i].x;
                // var y1 = self.pointArr[i].y;
                // var x2 = self.pointArr[i - 1].x;
                // var y2 = self.pointArr[i - 1].y;
                // var r = 400;
                // var hu = 2 * r * Math.asin( Math.sqrt( Math.pow(x1-x2,2) + Math.pow(y1 - y2,2) ) / (2 * r) );
                // var jiao = hu / r;
                self.ctx.save();
                self.ctx.beginPath();
                self.ctx.setLineDash([2,5]);
                self.ctx.strokeStyle = "red";
                self.ctx.lineWidth = "10px";
                self.ctx.moveTo(map.pointArr[i].x,map.pointArr[i].y);
                self.ctx.lineTo(map.pointArr[i - 1].x,map.pointArr[i - 1].y);
                self.ctx.stroke();
                self.ctx.restore();
            };
        };
    },20);
};