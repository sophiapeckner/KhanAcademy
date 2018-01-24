package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"regexp"
	"strconv"
	"strings"
)

var (
	file = flag.String("f", "data.json", "json file")
)

type data struct {
	StartTime    string `json:"start_time"`
	Q1First      string `json:"Q1First"`
	Q1Time       string `json:"Q1_time"`
	Q1Again      string `json:"Q1Again"`
	Q1AgainTime  string `json:"Q1Again_time"`
	Q2First      string `json:"Q2First"`
	Q2Time       string `json:"Q2_time"`
	Q2Again      string `json:"Q2Again"`
	Q2AgaginTime string `json:"Q2Again_time"`
	Gender       string `json:"gender"`
	GenderTime   string `json:"gender_time"`
	Age          string `json:"age"`
	AgeTime      string `json:"age_time"`
	ByeTime      string `json:"bye_time"`
	TimeSpent    int
}

func readIn(file string) ([]byte, error) {
	d, e := ioutil.ReadFile(file)
	if e != nil {
		return nil, e
	}
	return d, nil
}

func jsonToGo(input []byte) (map[string]data, error) {
	var target map[string]data
	if e := json.Unmarshal(input, &target); e != nil {
		return nil, e
	}
	return target, nil
}

func underscore(s string) string {
	return strings.ToLower(strings.Replace(s, " ", "_", -1))
}

func compareTime(a, b string) (int, error) {
	r := regexp.MustCompile("([0-9]+-[0-9]+):([0-9]+)")
	var aDateHour string
	var aMin int
	var bDateHour string
	var bMin int
	var e error

	aArray := r.FindStringSubmatch(a)
	if len(aArray) == 3 {
		aDateHour = aArray[1]
		aMin, e = strconv.Atoi(aArray[2])
		if e != nil {
			return 0, e
		}
	} else if len(aArray) == 0 {
		return 0, fmt.Errorf("start_time empty")
	} else {
		return 0, fmt.Errorf("check please")
	}

	bArray := r.FindStringSubmatch(b)
	if len(bArray) == 3 {
		bDateHour = bArray[1]
		bMin, e = strconv.Atoi(bArray[2])
		if e != nil {
			return 0, e
		}
	} else if len(bArray) == 0 {
		return 0, fmt.Errorf("bye_time empty")
	} else {
		return 0, fmt.Errorf("check plese")
	}

	if aDateHour != bDateHour {
		return 0, fmt.Errorf("start_time dateHour %s not equal to bye_time %s dateHour", a, b)
	}

	if bMin-aMin > 6 {
		return 0, fmt.Errorf("start_time %s more than 5 minutes apart from bye_time %s", a, b)
	}

	return bMin - aMin, nil
}

func filter(d map[string]data) map[string]data {
	validData := make(map[string]data)
	for k, v := range d {
		min, e := compareTime(v.StartTime, v.ByeTime)
		if e == nil {
			validData[k] = data{
				Q1First:   underscore(v.Q1First),
				Q1Again:   underscore(v.Q1Again),
				Q2First:   underscore(v.Q2First),
				Q2Again:   underscore(v.Q2Again),
				Gender:    underscore(v.Gender),
				Age:       underscore(v.Age),
				StartTime: v.StartTime,
				TimeSpent: min,
			}
		} else {
			fmt.Printf("invalid: %v: %s: %v\n", e, k, v)
			//fmt.Println(e)
		}
	}
	return validData
}

func main() {
	flag.Parse()
	i, e := readIn(*file)
	if e != nil {
		log.Fatal(e)
	}
	d, e := jsonToGo(i)
	if e != nil {
		log.Fatal(e)
	}
	validData := filter(d)
	for k, v := range validData {
		fmt.Println(k, v.Q1First, v.Q1Again, v.Q2First, v.Q2Again, v.Gender, v.Age, v.StartTime, v.TimeSpent)
	}
}
