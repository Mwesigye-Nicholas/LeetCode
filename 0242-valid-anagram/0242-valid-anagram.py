class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False

        count_dic_s, count_dic_t = {}, {}
        for index in range(len(s)):
            count_dic_s[s[index]] = count_dic_s.get(s[index], 0) + 1
            count_dic_t[t[index]] = count_dic_t.get(t[index], 0) + 1
        return count_dic_s == count_dic_t
        