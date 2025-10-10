
public class Solution
{
	public bool IsSubsequence(string s, string t)
	{
		if (s.Length == 0) return true;

		int sIndex = 0, tIndex = 0;

		while (tIndex < t.Length && t.Length > 0)
		{
			if (s[sIndex] == t[tIndex])
			{
				sIndex += 1;
				tIndex += 1;
			}
			else
			{
				tIndex += 1;
			}

			if (sIndex == s.Length)
			{
				return true;
			}
		}

		return false;
	}
}
