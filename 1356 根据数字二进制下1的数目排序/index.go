func sortByBits(arr []int) []int {
	mapping := make(map[int][]int)
	keys := make([]int,0)
	result := make([]int,0)
	for _,v:= range arr{
		count := 0
		n := v
		for n != 0{
			count ++
			n = (n - 1) & n
		}
		if val,ok := mapping[count];!ok{
			keys = append(keys,count)
			mapping[count] = append(val,v)
		}else{
			mapping[count] = append(val,v)
		}
	}
	sort.Ints(keys)
	for _,v := range keys{
		val := mapping[v]
		sort.Ints(val)
		result = append(result,val...)
	}
	return result
}