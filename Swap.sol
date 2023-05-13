// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


interface IUniswapV2Router02 {
    function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory);
}

contract MyContract {
    address private constant UNISWAP_ROUTER_ADDRESS = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    IUniswapV2Router02 private uniswapRouter = IUniswapV2Router02(UNISWAP_ROUTER_ADDRESS);
    
    function swapTokens(address tokenA, address tokenB, uint amountIn, uint amountOutMin, address to, uint deadline) external {
        address[] memory path = new address[](2);
        path[0] = tokenA;
        path[1] = tokenB;
        
        // Approve the Uniswap router to spend the tokenA
        require(IERC20(tokenA).approve(UNISWAP_ROUTER_ADDRESS, amountIn), "Approval failed");
        
        // Call the Uniswap router to swap the tokens
        uniswapRouter.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline);
    }
}