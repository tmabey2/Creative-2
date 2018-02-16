 
/*
	var [id_name]	= new Vue({
		el: '#[id_name]',
		data: {
			message: 'Hello Vue!'		
		}
	
	/////////////////////
	
	<div id="app-2">
  	<span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  	</span>
	</div>	
	
	
	var app2 = new Vue({
  	el: '#app-2',
  	data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  	}
	})
	
	///////////////////////////
	
	<div id="app-3">
  		<span v-if="seen">Now you see me</span>
	</div>
	
	
	var app3 = new Vue({
  	el: '#app-3',
  	data: {
    seen: true
  	}
	})
	
	//////////////////////////////
	
	<div id="app-4">
  	<ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
 	 </ol>
	</div>
	
	
	var app4 = new Vue({
 	 el: '#app-4',
 	 data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  	}
	})

	
	////////////////////////////////
	
	<div id="app-5">
  	<p>{{ message }}</p>
  	<button v-on:click="reverseMessage">Reverse Message</button>
	</div>
	
	
	var app5 = new Vue({
  	el: '#app-5',
  	data: {
    message: 'Hello Vue.js!'
  	},
  	methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
	})
	
	/////////////////////////////////////
	
	<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
	
	//////////////////////////////////////
*/

//this code creates the global 'theme' variable to effect text...

Vue.prototype.$health = '1';


var MTGaccess = new Vue({
		
		el: '#mtgcardaccess',
		data: {
				input : "",
		
		},
		methods: {
			
		fetchCard: function(){
			
			var input = this.input;			
			
			var myurl ="http://api.magicthegathering.io/v1/cards?name=" + this.input;
						
			
			console.log(myurl);
			$.ajax({
				
				url : myurl,
				dataType : "json",
				success : function(json){
					
						console.log(json);						
						
						var results = "";
						var num=0;
						var found = false;
			
						console.log(json.cards.length);
												
						for (var i = 0; i < json.cards.length; i++)
						{
					
							if (json.cards[i].imageUrl)
							{
								
								if (json.cards[i].name.valueOf().toLowerCase() == input.valueOf().toLowerCase())
								{
									num = i;	
									found = true;
									break;		
								}				
							}
						}
						
						if (json.cards.length < 1)
						{
							//no cards were found, default to Totally Lost
							
							$.ajax({
				
								url : "http://api.magicthegathering.io/v1/cards?name=Totally Lost",
								dataType : "json",
								success : function(json){
					
										console.log(json);						
						
										var results = "";
										var num=0;
			
										console.log(json.cards.length);
												
										
					
										results += '<img src="' + json.cards[num].imageUrl + '"/>';
										results += '<p id="note">Mistakes were made. Please try again</p>';
						
										$("#mtgcarddisplay").html(results);
				
									}
								
							});
							
						}//end if cards not found
						
						else
						{
							if(!found)		
							{
								var random = json.cards[Math.floor(Math.random()*json.cards.length)];
						
								while (!random.imageUrl)
								{
									random = json.cards[Math.floor(Math.random()*json.cards.length)];							
								}
								results += '<img src="' + random.imageUrl + '"/>';
					
						
								$("#mtgcarddisplay").html(results);
							
							}			
					
							else{
							results += '<img src="' + json.cards[num].imageUrl + '"/>';
							
							$("#mtgcarddisplay").html(results);
							}
						}
					}
				
			});
			
		
		},
		
		
		}

});



var dragonButton = new Vue({
	el: '#dragonButton',
	data: {
			
	},
	
	methods:{
	
		summonDragon: function(){
			
			var myurl ="http://api.magicthegathering.io/v1/cards?name=dragon";
						
			
			console.log(myurl);
			$.ajax({
				
				url : myurl,
				dataType : "json",
				success : function(json){
					
						console.log(json);						
						
						var results = "";
						var num=0;
			
						console.log(json.cards.length);
												
						var random = json.cards[Math.floor(Math.random()*json.cards.length)];
						
						while (!random.imageUrl)
						{
							random = json.cards[Math.floor(Math.random()*json.cards.length)];							
						}
						
								
						console.log(random.name);						
												
												
			
						results += '<img src="' + random.imageUrl + '"/>';
					
						
						$("#mtgcarddisplay").html(results);
		
					}
				
			});
			
		
		},
		
		
		}

});



var fightButton = new Vue({
	el: '#fight-button',
	data: {
		message: 'Placeholder!'	
	
	},
	methods: {
		startBattle: function() {
				console.log(this.message);
				console.log(this.$theme);
				
		}		
	
	
	}
});

var returnButton = new Vue({
	el: '#return-button',
	data: {
		message: 'Placeholder!'	
	
	},
	methods: {
		returnHome: function() {
			console.log(this.message);
			console.log(this.$theme);
		}
		
	}
});

var swapButton = new Vue({
	el: '#swap-button',
	data: {
		message: 'Placeholder!'	
		
	},
	methods: {
		swapTheme: function() {
				
				if (Vue.prototype.$theme == 1)
				{
					Vue.prototype.$theme = 2;	
				}
				else 
				{
					Vue.prototype.$theme = 1;
					
				}
		
		}	
		
	}
});



