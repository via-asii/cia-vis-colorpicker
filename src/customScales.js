function perc2color(perc) {
	var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}

const cat20list = [
	"#1f77b4",
	"#aec7e8",
	"#ff7f0e",
	"#ffbb78",
	"#2ca02c",
	"#98df8a",
	"#d62728",
	"#ff9896",
	"#9467bd",
	"#c5b0d5",
	"#8c564b",
	"#c49c94",
	"#e377c2",
	"#f7b6d2",
	"#7f7f7f",
	"#c7c7c7",
	"#bcbd22",
	"#dbdb8d",
	"#17becf",
	"#9edae5"
]

const cat20 = i => cat20list[i-1%20]


const catDivide = (categories) => {
	const split = 359/categories;
	const colors = []
	const s = categories < 10 ? () => '50%' : (i) => i%2==0? '35%':'75%';
	for (var i = 0; i <= categories; i++) {
		colors.push(`hsl(${split*i}, 50%, ${s(i)})`)
	}
	return (i) => colors[i]
}

export {perc2color, cat20, catDivide};
