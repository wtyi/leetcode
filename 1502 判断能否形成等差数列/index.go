func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	temp := 0.0
	for i:=0;i<len(arr) - 1;i ++{
		if temp == 0.0{
			temp = math.Abs(float64(arr[i] - arr[i + 1]))
			continue
		}
		if math.Abs(float64(arr[i] - arr[i + 1])) != temp{
			return false
		}
	}
	return true
}