func relativeSortArray(arr1 []int, arr2 []int) []int {
	mapping := make(map[int]int,0)
	result := make([]int,0)
	nowResult := make([]int,0)

	for _,v:= range arr1{
		mapping[v] ++
	}

	for i :=0;i < len(arr2);i ++{
		for j:= 0;j < mapping[arr2[i]];j ++{
			result = append(result,arr2[i])
		}
		mapping[arr2[i]] = 0
	}
	for k,v := range mapping{
		if v > 0{
			for v > 0 {
				nowResult = append(nowResult,k)
				v --
			}
		}
	}
	sort.Ints(nowResult)
	result = append(result, nowResult...)
	return result
}