var DataTypes = require("sequelize").DataTypes;
var _BaiThi = require("./BaiThi");
var _ChiTietCoiThi = require("./ChiTietCoiThi");
var _ChungChi = require("./ChungChi");
var _DonViChamThi = require("./DonViChamThi");
var _HoaDonDangKy = require("./HoaDonDangKy");
var _HoaDonGiaHan = require("./HoaDonGiaHan");
var _KetQua = require("./KetQua");
var _KhachHang = require("./KhachHang");
var _LichThi = require("./LichThi");
var _NhanVien = require("./NhanVien");
var _PhieuDangKy = require("./PhieuDangKy");
var _PhieuDangKyGiaHan = require("./PhieuDangKyGiaHan");
var _PhieuDuThi = require("./PhieuDuThi");
var _PhieuGiaHan = require("./PhieuGiaHan");
var _PhongThi = require("./PhongThi");
var _QuyDinh = require("./QuyDinh");
var _SaiSotBaiThi = require("./SaiSotBaiThi");
var _ThiSinh = require("./ThiSinh");

function initModels(sequelize) {
  var BaiThi = _BaiThi(sequelize, DataTypes);
  var ChiTietCoiThi = _ChiTietCoiThi(sequelize, DataTypes);
  var ChungChi = _ChungChi(sequelize, DataTypes);
  var DonViChamThi = _DonViChamThi(sequelize, DataTypes);
  var HoaDonDangKy = _HoaDonDangKy(sequelize, DataTypes);
  var HoaDonGiaHan = _HoaDonGiaHan(sequelize, DataTypes);
  var KetQua = _KetQua(sequelize, DataTypes);
  var KhachHang = _KhachHang(sequelize, DataTypes);
  var LichThi = _LichThi(sequelize, DataTypes);
  var NhanVien = _NhanVien(sequelize, DataTypes);
  var PhieuDangKy = _PhieuDangKy(sequelize, DataTypes);
  var PhieuDangKyGiaHan = _PhieuDangKyGiaHan(sequelize, DataTypes);
  var PhieuDuThi = _PhieuDuThi(sequelize, DataTypes);
  var PhieuGiaHan = _PhieuGiaHan(sequelize, DataTypes);
  var PhongThi = _PhongThi(sequelize, DataTypes);
  var QuyDinh = _QuyDinh(sequelize, DataTypes);
  var SaiSotBaiThi = _SaiSotBaiThi(sequelize, DataTypes);
  var ThiSinh = _ThiSinh(sequelize, DataTypes);

  NhanVien.belongsToMany(PhongThi, { as: 'MaPhongThi_PhongThis', through: ChiTietCoiThi, foreignKey: "MaNhanVien", otherKey: "MaPhongThi" });
  PhongThi.belongsToMany(NhanVien, { as: 'MaNhanVien_NhanViens', through: ChiTietCoiThi, foreignKey: "MaPhongThi", otherKey: "MaNhanVien" });
  SaiSotBaiThi.belongsTo(BaiThi, { as: "MaBaiThi_BaiThi", foreignKey: "MaBaiThi"});
  BaiThi.hasMany(SaiSotBaiThi, { as: "SaiSotBaiThis", foreignKey: "MaBaiThi"});
  BaiThi.belongsTo(ChungChi, { as: "MaChungChi_ChungChi", foreignKey: "MaChungChi"});
  ChungChi.hasMany(BaiThi, { as: "BaiThis", foreignKey: "MaChungChi"});
  KetQua.belongsTo(ChungChi, { as: "MaChungChi_ChungChi", foreignKey: "MaChungChi"});
  ChungChi.hasMany(KetQua, { as: "KetQuas", foreignKey: "MaChungChi"});
  LichThi.belongsTo(ChungChi, { as: "MaChungChi_ChungChi", foreignKey: "MaChungChi"});
  ChungChi.hasMany(LichThi, { as: "LichThis", foreignKey: "MaChungChi"});
  PhieuDuThi.belongsTo(ChungChi, { as: "MaChungChi_ChungChi", foreignKey: "MaChungChi"});
  ChungChi.hasMany(PhieuDuThi, { as: "PhieuDuThis", foreignKey: "MaChungChi"});
  BaiThi.belongsTo(DonViChamThi, { as: "MaDonVi_DonViChamThi", foreignKey: "MaDonVi"});
  DonViChamThi.hasMany(BaiThi, { as: "BaiThis", foreignKey: "MaDonVi"});
  PhieuDangKy.belongsTo(KhachHang, { as: "MaKhachHang_KhachHang", foreignKey: "MaKhachHang"});
  KhachHang.hasMany(PhieuDangKy, { as: "PhieuDangKies", foreignKey: "MaKhachHang"});
  ThiSinh.belongsTo(KhachHang, { as: "MaKhachHang_KhachHang", foreignKey: "MaKhachHang"});
  KhachHang.hasMany(ThiSinh, { as: "ThiSinhs", foreignKey: "MaKhachHang"});
  PhieuDuThi.belongsTo(LichThi, { as: "MaLichThi_LichThi", foreignKey: "MaLichThi"});
  LichThi.hasMany(PhieuDuThi, { as: "PhieuDuThis", foreignKey: "MaLichThi"});
  ChiTietCoiThi.belongsTo(NhanVien, { as: "MaNhanVien_NhanVien", foreignKey: "MaNhanVien"});
  NhanVien.hasMany(ChiTietCoiThi, { as: "ChiTietCoiThis", foreignKey: "MaNhanVien"});
  HoaDonDangKy.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(HoaDonDangKy, { as: "HoaDonDangKies", foreignKey: "NguoiTao"});
  HoaDonGiaHan.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(HoaDonGiaHan, { as: "HoaDonGiaHans", foreignKey: "NguoiTao"});
  KetQua.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(KetQua, { as: "KetQuas", foreignKey: "NguoiTao"});
  LichThi.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(LichThi, { as: "LichThis", foreignKey: "NguoiTao"});
  PhieuDangKy.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(PhieuDangKy, { as: "PhieuDangKies", foreignKey: "NguoiTao"});
  PhieuDangKyGiaHan.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(PhieuDangKyGiaHan, { as: "PhieuDangKyGiaHans", foreignKey: "NguoiTao"});
  PhieuDuThi.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(PhieuDuThi, { as: "PhieuDuThis", foreignKey: "NguoiTao"});
  PhieuGiaHan.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(PhieuGiaHan, { as: "PhieuGiaHans", foreignKey: "NguoiTao"});
  SaiSotBaiThi.belongsTo(NhanVien, { as: "NguoiTao_NhanVien", foreignKey: "NguoiTao"});
  NhanVien.hasMany(SaiSotBaiThi, { as: "SaiSotBaiThis", foreignKey: "NguoiTao"});
  HoaDonDangKy.belongsTo(PhieuDangKy, { as: "MaPhieuDangKy_PhieuDangKy", foreignKey: "MaPhieuDangKy"});
  PhieuDangKy.hasMany(HoaDonDangKy, { as: "HoaDonDangKies", foreignKey: "MaPhieuDangKy"});
  PhieuDuThi.belongsTo(PhieuDangKy, { as: "MaPhieuDangKy_PhieuDangKy", foreignKey: "MaPhieuDangKy"});
  PhieuDangKy.hasMany(PhieuDuThi, { as: "PhieuDuThis", foreignKey: "MaPhieuDangKy"});
  PhieuGiaHan.belongsTo(PhieuDangKyGiaHan, { as: "MaPhieuDangKyGiaHan_PhieuDangKyGiaHan", foreignKey: "MaPhieuDangKyGiaHan"});
  PhieuDangKyGiaHan.hasMany(PhieuGiaHan, { as: "PhieuGiaHans", foreignKey: "MaPhieuDangKyGiaHan"});
  BaiThi.belongsTo(PhieuDuThi, { as: "MaPhieuDuThi_PhieuDuThi", foreignKey: "MaPhieuDuThi"});
  PhieuDuThi.hasMany(BaiThi, { as: "BaiThis", foreignKey: "MaPhieuDuThi"});
  KetQua.belongsTo(PhieuDuThi, { as: "MaPhieuDuThi_PhieuDuThi", foreignKey: "MaPhieuDuThi"});
  PhieuDuThi.hasMany(KetQua, { as: "KetQuas", foreignKey: "MaPhieuDuThi"});
  PhieuDangKyGiaHan.belongsTo(PhieuDuThi, { as: "MaPhieuDuThi_PhieuDuThi", foreignKey: "MaPhieuDuThi"});
  PhieuDuThi.hasMany(PhieuDangKyGiaHan, { as: "PhieuDangKyGiaHans", foreignKey: "MaPhieuDuThi"});
  HoaDonGiaHan.belongsTo(PhieuGiaHan, { as: "MaPhieuGiaHan_PhieuGiaHan", foreignKey: "MaPhieuGiaHan"});
  PhieuGiaHan.hasMany(HoaDonGiaHan, { as: "HoaDonGiaHans", foreignKey: "MaPhieuGiaHan"});
  ChiTietCoiThi.belongsTo(PhongThi, { as: "MaPhongThi_PhongThi", foreignKey: "MaPhongThi"});
  PhongThi.hasMany(ChiTietCoiThi, { as: "ChiTietCoiThis", foreignKey: "MaPhongThi"});
  LichThi.belongsTo(PhongThi, { as: "MaPhongThi_PhongThi", foreignKey: "MaPhongThi"});
  PhongThi.hasMany(LichThi, { as: "LichThis", foreignKey: "MaPhongThi"});
  PhieuDuThi.belongsTo(ThiSinh, { as: "MaThiSinh_ThiSinh", foreignKey: "MaThiSinh"});
  ThiSinh.hasMany(PhieuDuThi, { as: "PhieuDuThis", foreignKey: "MaThiSinh"});

  return {
    BaiThi,
    ChiTietCoiThi,
    ChungChi,
    DonViChamThi,
    HoaDonDangKy,
    HoaDonGiaHan,
    KetQua,
    KhachHang,
    LichThi,
    NhanVien,
    PhieuDangKy,
    PhieuDangKyGiaHan,
    PhieuDuThi,
    PhieuGiaHan,
    PhongThi,
    QuyDinh,
    SaiSotBaiThi,
    ThiSinh,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
