<template>
   <div>
      <div class="chemical-element">
         Br
         <div class="desc" role="top-left">79.904</div>
         <div class="desc" role="top-right">
            -1
            +1
            +5
         </div>
         <div class="desc big" role="bottom-left-1">35</div>
         <div class="desc" role="bottom-left-2">2-8-18-7</div>
      </div>
      <div class="chemical-element">
         Ba
         <div class="desc" role="top-left">137.33</div>
         <div class="desc" role="top-right">+2</div>
         <div class="desc medium" role="bottom-left-1">56</div>
         <div class="desc" role="bottom-left-2">2-8-18-7</div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Loader"
}
</script>

<style scoped>
.chemical-element {
   width:165px;
   height:165px;
   position:relative;

   font: bold 95px Arial;
   color:#fafffb;

   padding:25px 25px 25px 30px;
   border:3px solid #DDFFE2;

   background: linear-gradient(-45deg, rgba(92,190,115,1) 1%,rgba(24,43,4,1) 100%);

   box-shadow:inset 0 0 0 1px rgba(0, 0, 0, .15);
   animation: flashing 2s linear infinite;
}

.chemical-element:nth-child(2) {
   margin-left:165px;
   padding-left:23px;
}

.desc {
   position:absolute;
   font: bold 13px Arial;
   color:rgba(244, 247, 245, .95);
}

.big {
   font: bold 20px Arial;
}

.medium {
   font: bold 17px Arial;
}

div[role="top-left"] {
   top:8px;
   left:10px;
}

div[role="top-right"] {
   top:8px;
   right:5px;
   text-align:right;
   width:25px;
}

div[role="bottom-left-1"] {
   bottom:20px;
   left:5px;
   text-align:left;
}

div[role="bottom-left-2"] {
   bottom:5px;
   left:5px;
   text-align:left;
}
@keyframes flashing {
   0% {
      opacity: .7;
   }
   50% {
      opacity: .2;
   }
   100% {
      opacity: .7;
   }
}
</style>