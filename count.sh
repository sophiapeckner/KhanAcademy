
for i in stop yield traffic_light speed_limit none_of_the_above; do

	echo "---- $i ----" 
	cat validData.txt |awk "\$4 == \"$i\"" |wc -l
	cat validData.txt |awk "\$5 == \"$i\"" |wc -l

done
