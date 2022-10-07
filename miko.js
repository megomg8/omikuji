var imglist;
function play1() {
	imglist = new Array(
					"ippan_chuukichi.jpeg",
					"ippan_daikichi.jpeg",
					"ippan_syoukichi.jpeg"
					);
	doSwing();
}

function play2() {
	imglist = new Array(
					"jk_ha.jpeg",
					"jk_ik.jpeg",
					"jk_is.jpeg",
					"jk_km.jpeg",
					"jk_kw.jpeg",
					"jk_ma.jpeg",
					"jk_mi.jpeg",
					"jk_ng.jpeg",
					"jk_st.jpeg",
					"jk_sz.jpeg",
					"jk_tm.jpeg",
					"jk_tn.jpeg",
					"jk_ym.jpeg"
					);
	doSwing();
}

function play3() {
	imglist = new Array(
					"dk_daikyou.jpeg"
					);
	doSwing();
}

function play4() {
	imglist = new Array(
					"jyukensei_daikichi.jpeg"
					);
	doSwing();
}

function doSwing() {
	var elem = document.getElementsByClassName("playBtn");
	for (var i = 0;i < elem.length;i++) {
		elem[i].style.visibility = 'hidden';
	}
	document.getElementById("Omikuji_sw").src = "images/omikuji-box_swing.png";
	document.getElementById("Omikuji_sw").className = "keyframe0 animation";
	setTimeout(doReload, 2000);
}

function doReload() {
	let now = new Date();
	var no = now.getTime() % imglist.length;
	document.getElementById("Omikuji_sw").src = "images/" + imglist[no];
	document.getElementById("Omikuji_sw").className = "";
}