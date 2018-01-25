#./analyze | grep -v invalid > validData.txt
echo "--- car color question: choice firstAnswer secondAnswer ---"
for i in red yellow green blue none_of_the_above; do
	first=$(cat validData.txt |awk "\$2 == \"$i\"" |wc -l)
	second=$(cat validData.txt |awk "\$3 == \"$i\"" |wc -l)
	echo $i $first $second 
done

echo "--- type of sign question: choice firstAnswer secondAnswer ---"
for i in stop yield traffic_light speed_limit none_of_the_above; do
	first=$(cat validData.txt |awk "\$4 == \"$i\"" |wc -l)
	second=$(cat validData.txt |awk "\$5 == \"$i\"" |wc -l)
	echo $i $first $second 
done

echo "--- totalParticipants yellow yield yellowAndYield  (both 1st and 2nd answers) ---"
total=$(cat validData.txt | wc -l)
color=$(cat validData.txt | awk "\$2==\"yellow\" && \$3==\"yellow\"" | wc -l)
sign=$(cat validData.txt | awk "\$4==\"yield\" && \$5==\"yield\"" | wc -l)
colorAndSign=$(cat validData.txt | awk "\$2==\"yellow\" && \$3==\"yellow\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
colorPercent=$(echo %$(echo "scale = 2; ($color / $total)" | bc -l | awk -F '.' '{print $2}'))
signPercent=$(echo %$(echo "scale = 2; ($sign / $total)" | bc -l | awk -F '.' '{print $2}'))
colorAndSignPercent=$(echo %$(echo "scale = 2; ($colorAndSign / $total)" | bc -l | awk -F '.' '{print $2}'))
echo $total $colorPercent $signPercent $colorAndSignPercent

echo "--- by age ---"
for i in 17_and_under 18_and_over; do 
	total=$(cat validData.txt | awk "\$7==\"$i\"" | wc -l)
	color=$(cat validData.txt | awk "\$7==\"$i\" && \$2==\"yellow\" && \$3==\"yellow\"" | wc -l)
	sign=$(cat validData.txt | awk "\$7==\"$i\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
	colorAndSign=$(cat validData.txt | awk "\$7==\"$i\" && \$2==\"yellow\" && \$3==\"yellow\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
  colorPercent=$(echo %$(echo "scale = 2; ($color / $total)" | bc -l | awk -F '.' '{print $2}'))
  signPercent=$(echo %$(echo "scale = 2; ($sign / $total)" | bc -l | awk -F '.' '{print $2}'))
  colorAndSignPercent=$(echo %$(echo "scale = 2; ($colorAndSign / $total)" | bc -l | awk -F '.' '{print $2}'))
	echo $i $total $colorPercent $signPercent $colorAndSignPercent
done

echo "--- by gender ---"
for i in female male; do 
	total=$(cat validData.txt | awk "\$6==\"$i\"" | wc -l)
	color=$(cat validData.txt | awk "\$6==\"$i\" && \$2==\"yellow\" && \$3==\"yellow\"" | wc -l)
	sign=$(cat validData.txt | awk "\$6==\"$i\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
	colorAndSign=$(cat validData.txt | awk "\$6==\"$i\" && \$2==\"yellow\" && \$3==\"yellow\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
  colorPercent=$(echo %$(echo "scale = 2; ($color / $total)" | bc -l | awk -F '.' '{print $2}'))
  signPercent=$(echo %$(echo "scale = 2; ($sign / $total)" | bc -l | awk -F '.' '{print $2}'))
  colorAndSignPercent=$(echo %$(echo "scale = 2; ($colorAndSign / $total)" | bc -l | awk -F '.' '{print $2}'))
	echo $i $total $colorPercent $signPercent $colorAndSignPercent
done


echo "--- by age and gender ---"
for j in 17_and_under 18_and_over; do 
  for i in female male; do 
	  total=$(cat validData.txt | awk "\$7 ==\"$j\" && \$6==\"$i\"" | wc -l)
	  color=$(cat validData.txt | awk "\$7==\"$j\" && \$6==\"$i\" && \$2==\"yellow\" && \$3==\"yellow\"" | wc -l)
	  sign=$(cat validData.txt | awk "\$7==\"$j\" && \$6==\"$i\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
	  colorAndSign=$(cat validData.txt | awk "\$7==\"$j\" && \$6==\"$i\" && \$2==\"yellow\" && \$3==\"yellow\" && \$4==\"yield\" && \$5==\"yield\"" | wc -l)
    colorPercent=$(echo %$(echo "scale = 2; ($color / $total)" | bc -l | awk -F '.' '{print $2}'))
    signPercent=$(echo %$(echo "scale = 2; ($sign / $total)" | bc -l | awk -F '.' '{print $2}'))
    colorAndSignPercent=$(echo %$(echo "scale = 2; ($colorAndSign / $total)" | bc -l | awk -F '.' '{print $2}'))
		echo $j $i $total $colorAndSign
	  echo $j $i $total $colorPercent $signPercent $colorAndSignPercent
  done
done
echo "--- interesting statstic about changing mind ---"
yellow1=$(cat validData.txt | awk '$2=="yellow"' | wc -l)
colorChangeToWrong=$(cat validData.txt | awk '$2=="yellow" && $3!="yellow"' | wc -l)
colorChangeToWrongPercent=$(echo %$(echo "scale = 2; ($colorChangeToWrong / $yellow1)" | bc -l | awk -F '.' '{print $2}'))
echo "color change from right to wrong $colorChangeToWrongPercent --"

yellow2=$(cat validData.txt | awk '$3=="yellow"' | wc -l)
colorChangeToRight=$(cat validData.txt | awk '$2!="yellow" && $3=="yellow"'| wc -l)
colorChangeToRightPercent=$(echo %$(echo "scale = 2; ($colorChangeToRight / $yellow2)" | bc -l | awk -F '.' '{print $2}'))
echo "color change from wrong to right $colorChangeToRightPercent --"


yield1=$(cat validData.txt | awk '$5=="yield"' | wc -l)
signChangeToWrong=$(cat validData.txt | awk '$4=="yield" && $5!="yield"'|wc -l)
signChangeToWrongPercent=$(echo %$(echo "scale = 2; ($signChangeToWrong / $yield1)" | bc -l | awk -F '.' '{print $2}'))
echo "sign change from right to wrong $signChangeToWrongPercent --"

yield2=$(cat validData.txt | awk '$5=="yield"' | wc -l)
signChangeToRight=$(cat validData.txt | awk '$4!="yield" && $5=="yield"' |wc -l)
signChangeToRightPercent=$(echo %$(echo "scale = 2; ($signChangeToRight / $yield2)" | bc -l | awk -F '.' '{print $2}'))
echo "sign change from wrong to right $signChangeToRightPercent --"

