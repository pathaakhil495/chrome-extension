async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=d8e6574b-5088-404a-be3a-e2a6daa70fed&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});
            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');
            return relevantData;


        
        })
     
}

getMatchData();