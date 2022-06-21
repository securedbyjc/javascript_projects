function my_Dictionary() {
	var Boxer= {
        Name: "Muhammad Ali",
		Weightclass: "Heavyweight",
		AgeAtTimeFirstChampionship: 22,
		CareerWins: 56,
		CareerLoses: 5,	
    };
	delete Boxer.Name;
    document.getElementById("Dictionary").innerHTML = Boxer.Name;	

}


