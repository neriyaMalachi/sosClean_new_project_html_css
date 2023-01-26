const init = () => {

    createAllProducts();

}

const createAllProducts = () => {


    let prod1 = new product("#root", "הרכה לניקוי ספות בד  ", "/a1.jpg", 0, 150);
    prod1.render();
    let prod2 = new product("#root", "הרכה לניקוי ספות עור  ", "/a2.jpg", 0, 160);
    prod2.render();
    let prod3 = new product("#root", " הרכה לניקוי ספות בד  ", "/a3.jpg", 0, 150);
    prod3.render();
    let prod4 = new product("#root", "הרכה לניקוי וטיפול בספות בד  ", "/a4.jpg", 0, 150);
    prod4.render();
    let prod5 = new product("#root", "חומר לניקוי ספות בד  ", "/a5.jpg", 0, 50);
    prod5.render();
    let prod6 = new product("#root", "חומר לניקוי ספות בד  ", "/a6.jpg", 0, 100);
    prod6.render();
    let prod7 = new product("#root", "חומר לטיפול בעור ללחות  ", "/a7.jpg", 0, 250);
    prod7.render();
    let prod8 = new product("#root", "חומר לניקוי ספות בד  ", "/a8.jpg", 0, 100);
    prod8.render();
    let prod9 = new product("#root", "חומר לניקוי ספות בד  ", "/a9.jpg", 0, 110);
    prod9.render();
    let prod10 = new product("#root", "bbbbbbbbb ", "/a10.jpg", 0, 150);
    prod10.render();
    let prod11 = new product("#root", "חומר לניקוי וטיפול בעור  ", "/a11.jpg", 0, 270);
    prod11.render();
    let prod12 = new product("#root", "  מכונת ניקוי ספות ביתית שעובדת על הזרקה ויניקה   ", "/a12.jpg", 0, 1500);
    prod12.render();
    let prod13 = new product("#root", "מברשת רכה לניקוי ספות ", "/a13.jpg", 0, 30);
    prod13.render();
}

init();
