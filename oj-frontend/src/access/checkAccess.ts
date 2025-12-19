import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限（判断当前登录用户是否具有某个权限）
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 是否有权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_Login) => {
  // 获取当前用户的权限，默认为未登录状态
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_Login;

  // 未登录状态下只能访问不需要登录的页面
  if (needAccess === ACCESS_ENUM.NOT_Login) {
    return true;
  }

  // 用户已登录才能访问的页面
  if (needAccess === ACCESS_ENUM.USER) {
    // 只要已登录就可以访问（包括管理员）
    if (loginUserAccess === ACCESS_ENUM.NOT_Login) {
      return false;
    }
    return true;
  }

  // 管理员专属页面
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 只有管理员可以访问
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
    return true;
  }

  return false;
};

export default checkAccess;
