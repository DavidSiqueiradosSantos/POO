function testConst() {
    const const01 = { proprieade: "Valor" }
    console.log("01a.", const01.proprieade);

    const01.proprieade = "Novo Valo";
    console.log("02a.", const01.proprieade);


}

// não haverá erro

testConst();