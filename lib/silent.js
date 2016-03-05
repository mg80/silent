'use strict';
class Silent{
	constructor ( /*String*/ name, /*String*/ exp ){
		this._name = name;
		this._exp = exp;
	}

	set name ( name ) { this._name = name }
	get name(){ return this._name }

	get exp(){ return this._exp }


	setup ( ){
		if( !window.Worker ){
			console.error( 'Web worker not supported in your browser' );
			return;
		}
		var silentWorker = new Worker( 'lib/sleeper.js' );
		//silent worker will take the exp at some point somehow
	}
}