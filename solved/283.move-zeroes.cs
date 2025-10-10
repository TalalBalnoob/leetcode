
public class Solution
{
	public void MoveZeroes(int[] nums)
	{
		var l = 0;
		for (int r = 0; r < nums.Length; r++)
		{
			if (nums[r] == 0) continue;

			(nums[l], nums[r]) = (nums[r], nums[l]);
			l++;
		}
	}
}
