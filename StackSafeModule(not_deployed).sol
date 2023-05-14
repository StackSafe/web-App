
//This is the module to transfer money between adresses whether there are a Safe address or a classic wallet adress.
//All the imports here are basic imports, i did not publish all the libraries on the github.




// SPDX-License-Identifier: LGPL-3.0-only

/// @title Module Interface - A contract that can pass messages to a Module Manager contract if enabled by that contract.
pragma solidity >=0.7.0 <0.9.0;

import "./lib/IAvatar.sol";
import "./lib/FactoryFriendly.sol";

//import "./Guardable.sol"; here is the whole section of guardable imported

//import "./lib/Enum.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//import "./lib/BaseGuard.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

//import "./IGuard.sol";

interface IGuard {
    
    function checkTransaction(
        address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation,
        uint256 safeTxGas,
        uint256 baseGas,
        uint256 gasPrice,
        address gasToken,
        address payable refundReceiver,
        bytes memory signatures,
        address msgSender
    ) external;

    function checkAfterExecution(bytes32 txHash, bool success) external;
}







abstract contract BaseGuard is IERC165 {
    function supportsInterface(bytes4 interfaceId)
        external
        pure
        override
        returns (bool)
    {
        return
            interfaceId == type(IGuard).interfaceId || // 0xe6d7a83a
            interfaceId == type(IERC165).interfaceId; // 0x01ffc9a7
    }

    /// @dev Module transactions only use the first four parameters: to, value, data, and operation.
    /// Module.sol hardcodes the remaining parameters as 0 since they are not used for module transactions.
    /// @notice This interface is used to maintain compatibilty with Gnosis Safe transaction guards.
    function checkTransaction(
        address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation,
        uint256 safeTxGas,
        uint256 baseGas,
        uint256 gasPrice,
        address gasToken,
        address payable refundReceiver,
        bytes memory signatures,
        address msgSender
    ) external virtual;

    function checkAfterExecution(bytes32 txHash, bool success) external virtual;
}

/// @title Guardable - A contract that manages fallback calls made to this contract
contract Guardable is Ownable {
    address public guard;

    event ChangedGuard(address guard);

    /// `guard_` does not implement IERC165.
    error NotIERC165Compliant(address guard_);

    /// @dev Set a guard that checks transactions before execution.
    /// @param _guard The address of the guard to be used or the 0 address to disable the guard.
    function setGuard(address _guard) external onlyOwner {
        if (_guard != address(0)) {
            if (!BaseGuard(_guard).supportsInterface(type(IGuard).interfaceId))
                revert NotIERC165Compliant(_guard);
        }
        guard = _guard;
        emit ChangedGuard(guard);
    }

    function getGuard() external view returns (address _guard) {
        return guard;
    }
}



import "./Module.sol"

//start

abstract contract SafestackModule is Module {
    SwapRequest[] public swapRequests;

    function execute ( address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation
    ) internal returns (bool success) {
        require(
            msg.sender == 0x2D6bF5C3773b53DA997D078494Cbc48f81BFA941,
            "Only the Gelato address may create swap requests"
        );


        success = IAvatar(target).execTransactionFromModule(
                to,
                value,
                data,
                operation
            );
    }



}
