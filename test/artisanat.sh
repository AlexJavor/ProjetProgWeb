#!/bin/bash

#vérification du nombre de paramètres
#besoin d'au moins un nom pour le nouveau fichier en dernier argument
if test $# -lt 1
then
	echo "erreur: il n'y a pas d'argument"
else
	#création du fichier texte a modifier
       	let n=$#
	touch $1
	#shift

	#début de l'écriture sur le fichier
	let i=2
	for param in "$*"
	do
		cat $param > $1
	done
fi


