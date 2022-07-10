const data = [
	{
		brand: "Binance",
		logo: "https://i.imgur.com/9DodTqn.png",
		link: "https://accounts.binance.me/zh-TW/register?ref=90803075",
		code: "90803075",
        type: 'crypyto'
	},
	{
		brand: "Binance Pool",
		logo: "https://i.imgur.com/9DodTqn.png",
		link: "https://accounts.binance.me/zh-TW/register?ref=HD1N9LMS",
		code: "HD1N9LMS",
        type: 'crypyto'
	},
	{
		brand: "Pionex",
		logo: "https://i.imgur.com/4hIBD6B.jpg",
		link: "https://www.pionex.com/zh-TW/sign/ref/qgChpAWE",
		code: "qgChpAWE",
        type: 'crypyto'
	},
	{
		brand: "Ace",
		logo: "https://i.imgur.com/T9z0pqf.jpg",
		link: "https://ace.io/invitation/17364672",
		code: "17364672",
        type: 'crypyto'
	},
	{
		brand: "Maicoin",
		logo: "https://i.imgur.com/ShfIakz.png",
		link: "https://max.maicoin.com/signup?r=06de9bba",
		code: "06de9bba",
        type: 'crypyto'
	},
	{
		brand: "Hiveos",
		logo: "https://i.imgur.com/rUUEMzR.png",
		link: "https://hiveos.farm?ref=906065",
		code: "906065",
        type: 'crypyto'
	},
	{
		brand: "Coinbase",
		logo: "https://i.imgur.com/AmDGxaX.png",
		link: "coinbase.com/join/JOYNZ8?src=ios-link",
		code: "",
        type: 'crypyto'
	},
	{
		brand: "Bee network",
		logo: "https://i.imgur.com/nvEZPzm.jpg",
		link: "https://bee.com/en/download",
		code: "john_weng",
        type: 'crypyto'
	},
	{
		brand: "Pi network",
		logo: "https://i.imgur.com/aa2nNKv.png",
		link: "https://minepi.com/cba46532",
		code: "cba46532",
        type: 'crypyto'
	},
	{
		brand: "SANDBOX",
		logo: "https://i.imgur.com/qsURKQs.png",
		link: "https://www.sandbox.game/login/?r=BryCjVWrIsNyKtvcRyRKSN",
		code: "",
        type: 'crypyto'
	},
	{
		brand: "Ledger",
		logo: "https://i.imgur.com/eUX2bev.png",
		link: "http://ledger.refr.cc/cba46532",
		code: "",
        type: 'crypyto'
	},
	{
		brand: "Crypto.com",
		logo: "https://i.imgur.com/3fma1B4.jpg",
		link: "https://crypto.com/app/vgyk4cq7ft",
		code: "vgyk4cq7ft",
        type: 'crypyto'
	},
	{
		brannd: "FTX",
		logo: "https://i.imgur.com/54dLg97.jpg",
		link: "https://ftx.com/#a=26205624",
		code: "26205624",
        type: 'crypyto'
	},
    // food
    {
		brand: "Uber Eats",
		logo: "https://i.imgur.com/B7hWGcv.png",
		link: "http://ubr.to/EatsGiveGet",
		code: "eats-mlmru9",
        type: 'food'
	},
	{
		brand: "Food Panda",
		logo: "https://i.imgur.com/YEtfZf2.png",
		link:
			"https://www.foodpanda.com.tw/referral?code=ed87ae3f69a6465f8b4b934aa7eff36a&geid=FP_TW",
		code: "",
        type: 'food'
	},
    // bank
    {
		brand: "Richart",
		logo: "https://i.imgur.com/WZNZ9Be.jpg",
		link: "https://richart.tw/TSDIB_RichartWeb/RC07/RC070100?sn=YAM5K",
		code: "YAM5K",
        type: 'bank'
	},
	{
		brand: "Bankee",
		logo: "https://i.imgur.com/BVR0t8L.jpg",
		link: "https://www.appbankee.com.tw/bankee/rest/re/DHS24",
		code: "DHS24",
        type: 'bank'
	},
	{
		brand: "Line Bank",
		logo: "https://i.imgur.com/X18ilfC.png",
		link: "https://www.linebank.com.tw/R/mgm-event/invitation?mgm=101000359597",
		code: "101000359597",
        type: 'bank'
	},
	{
		brand: "DAWHO",
		logo: "https://i.imgur.com/8AgF32B.jpg",
		link: "https://mma.tw/dawhoevent741",
		code: "",
        type: 'bank'
	},
	{
		brand: "玉山銀行",
		logo: "https://i.imgur.com/XJh20kQ.png",
		link: "https://j3x8a.app.goo.gl/yHCoJEJMPcXMKZEEA",
		code: "2aN4TCM1",
        type: 'bank'
	},
    // sharedService
    {
		brand: "GoShare",
		logo: "https://i.imgur.com/Bj1Myas.png",
		link: "https://go.ridegoshare.com/LjobhuGZKeiPjguGA",
		code: "4YR7D",
        type: 'sharedService'
	},
	{
		brand: "Wemo",
		logo: "https://i.imgur.com/2rSHf9F.png",
		link: "https://wemoscooter.onelink.me/a864/f74ae059",
		code: "NFNUKQGU",
        type: 'sharedService'
	},
	{
		brand: "Charge Spot",
		logo: "https://i.imgur.com/STQyABA.png",
		link: "https://api.charge-spot.com/v2/h5/share/438566?language=en_US",
		code: "NFNUKQGU",
        type: 'sharedService'
	},
    // shipping
    {
		brand: "Shopee",
		logo: "https://i.imgur.com/sAXCYSs.png",
		link: "https://shp.ee/wpqitcz?smtt=0.0.9",
		code: "CAIJI422",
        type: 'shopping'
	},
	{
		brand: "Shopback",
		logo: "https://i.imgur.com/micJ4jG.jpg",
		link: "https://app.shopback.com/PUVyMIFXqmb",
		code: "",
        type: 'shopping'
	},
	{
		brand: "Pinkoi",
		logo: "https://i.imgur.com/NRDktco.png",
		link: "https://en.pinkoi.com/inv/pp_aachrbhy27lasmqgfrutedddbrba",
		code: "",
        type: 'shopping'
	},
	{
		brand: "LINE 購物",
		logo: "https://i.imgur.com/OCSWkSv.png",
		link: "https://buy.line.me/R/activate?referralCode=gGZ8pBJZQeQz",
		code: "gGZ8pBJZQeQz",
        type: 'shopping'
	},
    {
		brand: "Spotify",
		logo: "https://i.imgur.com/klfm32x.png",
		link: "https://open.spotify.com/user/cba45632?si=RYPtaqALTrqq2kxcigmhRA",
		code: "",
        type: 'music'
	},
    // travel
    {
		brand: "Airbnb",
		logo: "https://i.imgur.com/JZwZyif.png",
		link: "https://www.airbnb.com/r/caijinw",
		code: "",
        type: 'travel'
	},
    // life
    {
		brand: "Stocard",
		logo: "https://i.imgur.com/8Byrel7.png",
		link: "https://app.stocardapp.com/invite/jgwdhmax",
		code: "jgwdhmax",
        type: 'life'
	}
];


export default data
