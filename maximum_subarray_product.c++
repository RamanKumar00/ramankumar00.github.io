#include<iostream>
#include<vector>
using namespace std;

int maxProduct(vector<int>& nums) {
    int n = nums.size();
    int maxProduct = nums[0];
    int minProduct = nums[0];
    int result = maxProduct;

    for (int i = 1; i < n; ++i) {
        if (nums[i] < 0) {
            swap(maxProduct, minProduct);
        }

        maxProduct = max(nums[i], maxProduct * nums[i]);
        minProduct = min(nums[i], minProduct * nums[i]);

        result = max(result, maxProduct);
    }

    return result;
}

int main() {
    vector<int> nums = {2, 3, -2, 4, -1};

    int result = maxProduct(nums);

    cout << "Maximum Subarray Product: " << result << endl;

    return 0;
}
