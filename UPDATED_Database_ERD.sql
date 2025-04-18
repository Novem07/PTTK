-- [UPDATED BASED ON NEW ERD IMAGE - APRIL 14, 2025]

﻿-- Tạo CSDL
CREATE DATABASE ToChucThiChungChi;
USE ToChucThiChungChi;

-- Nhân viên kế toán
CREATE TABLE NVKeToan (
    MaNVKeToan VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi VARCHAR(255)
);

-- Nhân viên tiếp nhận
CREATE TABLE NVTiepNhan (
    MaNVTiepNhan VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi VARCHAR(255)
);

-- Nhân viên tô chức thi
CREATE TABLE NVToChucThi (
    MaNVToChucThi VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi VARCHAR(255)
);

-- Nhân viên nhập liệu
CREATE TABLE NVNhapLieu (
    MaNVNhapLieu VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi VARCHAR(255)
);

-- Nhân viên coi thi
CREATE TABLE NVCoiThi (
    MaNVCoiThi VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi VARCHAR(255)
);

-- Khách hàng
CREATE TABLE KhachHang (
    MaKhachHang VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    DiaChi VARCHAR(255),
    DonVi VARCHAR(100)
);

-- Thí sinh
CREATE TABLE ThiSinh (
    MaThiSinh VARCHAR(100) PRIMARY KEY,
    HoTen VARCHAR(100),
    SoDienThoai VARCHAR(15),
    Email VARCHAR(100),
    NgaySinh DATE,
    GioiTinh VARCHAR(10),
    DiaChi VARCHAR(255),
    MaKhachHang VARCHAR(100),
);


-- Phiếu đăng ký
CREATE TABLE PhieuDangKy (
    MaPhieuDangKy VARCHAR(100) PRIMARY KEY,
    NgayDangKy DATE,
    TrangThaiPhieu VARCHAR(50),
    PhuongThucThanhToan VARCHAR(50),
    MucGiamGia DECIMAL(5,2),
    MaThanhToan VARCHAR(20),
    MaKhachHang VARCHAR(100),
    MaDSChoPhatHanh VARCHAR(100),
    NguoiTao VARCHAR(100)
);


-- Phiếu dự thi
CREATE TABLE PhieuDuThi (
    MaPhieuDuThi VARCHAR(100) PRIMARY KEY,
    SoBaoDanh VARCHAR(20),
    NgayThi DATE,
    GioThi TIME,
    TrangThaiPhieu VARCHAR(50),
    MaThiSinh VARCHAR(100),
    MaPhieuDangKy VARCHAR(100),
    NguoiTao VARCHAR(100),
    MaLichThi VARCHAR(100)
);

-- Phiếu đăng ký gia hạn
CREATE TABLE PhieuDangKyGiaHan (
    MaPhieuDKGiaHan VARCHAR(100) PRIMARY KEY,
    TruongHop TEXT,
    SoLanGiaHanDaSuDung INT,
    LichThiMoi VARCHAR(100),
    NgayYeuCau DATE,
    NgayXuLy DATE,
    MaPhieuDuThi VARCHAR(100),
    NguoiTao VARCHAR(100)
);

-- Phiếu gia hạn
CREATE TABLE PhieuGiaHan (
    MaPhieuGiaHan VARCHAR(100) PRIMARY KEY,
    NgayLapPhieu DATE,
    TrangThaiThanhToan VARCHAR(50),
    MaPhieuDKGiaHan VARCHAR(100),
    NguoiTao VARCHAR(100)
);

-- Hóa đơn
CREATE TABLE HoaDon (
    MaHoaDon VARCHAR(100) PRIMARY KEY,
    NgayLapHoaDon DATE,
    TongTien DECIMAL(15,2),
    HinhThucThanhToan VARCHAR(50),
    TrangThaiThanhToan VARCHAR(50),
    NguoiTao VARCHAR(100)
);

-- Hóa đơn đăng ký
CREATE TABLE HoaDonDangKy (
    MaHoaDon VARCHAR(100),
    MaPhieuDangKy VARCHAR(100),
    TroGia DECIMAL(5,2),
    PRIMARY KEY (MaHoaDon, MaPhieuDangKy)
);

-- Hóa đơn gia hạn
CREATE TABLE HoaDonGiaHan (
    MaHoaDon VARCHAR(100),
    MaPhieuDKGiaHan VARCHAR(100) UNIQUE,
    PRIMARY KEY (MaHoaDon, MaPhieuDKGiaHan)
);

-- Phòng thi
CREATE TABLE PhongThi (
    MaPhongThi VARCHAR(100) PRIMARY KEY,
    SoChoNgoi INT
);

-- Lịch thi
CREATE TABLE LichThi (
    MaLichThi VARCHAR(100) PRIMARY KEY,
    NgayThi DATE,
    GioThi TIME,
    ThoiGianThi INT,
    SoChoTrong INT,
    PhongThi VARCHAR(100),
    GiamThi1 VARCHAR(100),
    GiamThi2 VARCHAR(100),
    NguoiTao VARCHAR(100)
);

-- Bài thi
CREATE TABLE BaiThi (
    MaBaiThi VARCHAR(100) PRIMARY KEY,
    MonThi VARCHAR(100),
    MaPhieuDuThi VARCHAR(100),
    DonViCham VARCHAR(100)
);

-- Đơn vị chấm thi
CREATE TABLE DonViChamThi (
    MaDonVi VARCHAR(100) PRIMARY KEY,
    TenDonVi VARCHAR(100),
    SDT VARCHAR(15),
    DiaChi VARCHAR(255),
    Email VARCHAR(100)
);

-- Sai sót bài thi
CREATE TABLE SaiSotBaiThi (
    MaSaiSot VARCHAR(100) PRIMARY KEY,
    NoiDung TEXT,
    MaBaiThi VARCHAR(100),
    NguoiTao VARCHAR(100)
);

-- Chứng chỉ
CREATE TABLE ChungChi (
    MaChungChi VARCHAR(100) PRIMARY KEY,
    TenChungChi VARCHAR(100),
    LoaiChungChi VARCHAR(50),
    MoTa TEXT,
    ThoiHan INT, -- Số tháng hoặc năm
    Gia DECIMAL(10,2)
);

-- Kết quả
CREATE TABLE KetQua (
    MaKetQua VARCHAR(100) PRIMARY KEY,
    DiemSo DECIMAL(5,2),
    Mon VARCHAR(100),
    NgayCham DATE,
    GhiChu TEXT,
    ChungChi VARCHAR(100),
    MaPhieuDuThi VARCHAR(100),
    NguoiTao VARCHAR(100)
);

-- Danh sách chờ phát hành
CREATE TABLE DanhSachChoPhatHanh (
    MaDSChoPhatHanh VARCHAR(100) PRIMARY KEY,
    TrangThaiPhatHanh VARCHAR(50),
    NgayTao DATE,
    NguoiTao VARCHAR(100)
);


/*DROP TABLE IF EXISTS
    KetQua,
    ChungChi,
    SaiSotBaiThi,
    DonViChamThi,
    BaiThi,
    LichThi,
    PhongThi,
    HoaDonGiaHan,
    HoaDonDangKy,
    HoaDon,
    PhieuGiaHan,
    PhieuDangKyGiaHan,
    PhieuDuThi,
    PhieuDangKy,
    ThiSinh,
    KhachHang,
    NVCoiThi,
    NVNhapLieu,
    NVToChucThi,
    NVTiepNhan,
    NVKeToan,
    DanhSachChoPhatHanh;
*/

-- Khóa ngoại
-- Phiếu dự thi
ALTER TABLE PhieuDuThi
ADD CONSTRAINT FK_PhieuDuThi_ThiSinh
FOREIGN KEY (MaThiSinh) REFERENCES ThiSinh(MaThiSinh);

ALTER TABLE PhieuDuThi
ADD CONSTRAINT FK_PhieuDuThi_PhieuDangKy
FOREIGN KEY (MaPhieuDangKy) REFERENCES PhieuDangKy(MaPhieuDangKy);

ALTER TABLE PhieuDuThi
ADD CONSTRAINT FK_PhieuDuThi_NVToChucThi
FOREIGN KEY (NguoiTao) REFERENCES NVToChucThi(MaNVToChucThi);

ALTER TABLE PhieuDuThi
ADD CONSTRAINT FK_PhieuDuThi_LichThi
FOREIGN KEY (MaLichThi) REFERENCES LichThi(MaLichThi);

-- Phiếu Đăng Ký Gia Hạn
ALTER TABLE PhieuDangKyGiaHan
ADD CONSTRAINT FK_PDKGiaHan_PhieuDuThi
FOREIGN KEY (MaPhieuDuThi) REFERENCES PhieuDuThi(MaPhieuDuThi);

ALTER TABLE PhieuDangKyGiaHan
ADD CONSTRAINT FK_PDKGiaHan_NVToChucThi
FOREIGN KEY (NguoiTao) REFERENCES NVTiepNhan(MaNVTiepNhan);

-- Phiếu Gia Hạn
ALTER TABLE PhieuGiaHan
ADD CONSTRAINT FK_PhieuGiaHan_NVTiepNhan
FOREIGN KEY (NguoiTao) REFERENCES NVTiepNhan(MaNVTiepNhan);

ALTER TABLE PhieuGiaHan
ADD CONSTRAINT FK_PhieuGiaHan_HoaDonGiaHan
FOREIGN KEY (MaPhieuDKGiaHan) REFERENCES HoaDonGiaHan(MaPhieuDKGiaHan);

-- Hóa Đơn
ALTER TABLE HoaDon
ADD CONSTRAINT FK_HoaDon_NVKeToan
FOREIGN KEY (NguoiTao) REFERENCES NVKeToan(MaNVKeToan);

-- Hóa Đơn Đăng Ký
ALTER TABLE HoaDonDangKy
ADD CONSTRAINT FK_HDDK_HoaDon
FOREIGN KEY (MaHoaDon) REFERENCES HoaDon(MaHoaDon);

ALTER TABLE HoaDonDangKy
ADD CONSTRAINT FK_HDDK_PhieuDangKy
FOREIGN KEY (MaPhieuDangKy) REFERENCES PhieuDangKy(MaPhieuDangKy);

-- Hóa Đơn Gia Hạn
ALTER TABLE HoaDonGiaHan
ADD CONSTRAINT FK_HDGH_HoaDon
FOREIGN KEY (MaHoaDon) REFERENCES HoaDon(MaHoaDon);

ALTER TABLE HoaDonGiaHan
ADD CONSTRAINT FK_HDGH_PhieuDKGiaHan
FOREIGN KEY (MaPhieuDKGiaHan) REFERENCES PhieuDangKyGiaHan(MaPhieuDKGiaHan);

-- Lịch Thi
ALTER TABLE LichThi
ADD CONSTRAINT FK_LichThi_PhongThi
FOREIGN KEY (PhongThi) REFERENCES PhongThi(MaPhongThi);

ALTER TABLE LichThi
ADD CONSTRAINT FK_LichThi_GiamThi1
FOREIGN KEY (GiamThi1) REFERENCES NVCoiThi(MaNVCoiThi);

ALTER TABLE LichThi
ADD CONSTRAINT FK_LichThi_GiamThi2
FOREIGN KEY (GiamThi2) REFERENCES NVCoiThi(MaNVCoiThi);

ALTER TABLE LichThi
ADD CONSTRAINT FK_LichThi_NVTiepNhan
FOREIGN KEY (NguoiTao) REFERENCES NVTiepNhan(MaNVTiepNhan);

-- Bài Thi
ALTER TABLE BaiThi
ADD CONSTRAINT FK_BaiThi_PhieuDuThi
FOREIGN KEY (MaPhieuDuThi) REFERENCES PhieuDuThi(MaPhieuDuThi);

ALTER TABLE BaiThi
ADD CONSTRAINT FK_BaiThi_DonViCham
FOREIGN KEY (DonViCham) REFERENCES DonViChamThi(MaDonVi);

-- Sai Sót Bài Thi
ALTER TABLE SaiSotBaiThi
ADD CONSTRAINT FK_SaiSotBaiThi_BaiThi
FOREIGN KEY (MaBaiThi) REFERENCES BaiThi(MaBaiThi);

ALTER TABLE SaiSotBaiThi
ADD CONSTRAINT FK_SaiSotBaiThi_NVNhapLieu
FOREIGN KEY (NguoiTao) REFERENCES NVNhapLieu(MaNVNhapLieu);

-- Kết Quả
ALTER TABLE KetQua
ADD CONSTRAINT FK_KetQua_ChungChi
FOREIGN KEY (ChungChi) REFERENCES ChungChi(MaChungChi);

ALTER TABLE KetQua
ADD CONSTRAINT FK_KetQua_PhieuDuThi
FOREIGN KEY (MaPhieuDuThi) REFERENCES PhieuDuThi(MaPhieuDuThi);

ALTER TABLE KetQua
ADD CONSTRAINT FK_KetQua_NVNhapLieu
FOREIGN KEY (NguoiTao) REFERENCES NVNhapLieu(MaNVNhapLieu);

-- Danh Sách Chờ Phát Hành
ALTER TABLE DanhSachChoPhatHanh
ADD CONSTRAINT FK_DSChoPhatHanh_NVToChucThi
FOREIGN KEY (NguoiTao) REFERENCES NVToChucThi(MaNVToChucThi);

-- Phiếu Đăng Ký
ALTER TABLE PhieuDangKy
ADD CONSTRAINT FK_PhieuDangKy_KhachHang
FOREIGN KEY (MaKhachHang) REFERENCES KhachHang(MaKhachHang);

ALTER TABLE PhieuDangKy
ADD CONSTRAINT FK_PhieuDangKy_DSChoPhatHanh
FOREIGN KEY (MaDSChoPhatHanh) REFERENCES DanhSachChoPhatHanh(MaDSChoPhatHanh);

ALTER TABLE PhieuDangKy
ADD CONSTRAINT FK_PhieuDangKy_NVTiepNhan
FOREIGN KEY (NguoiTao) REFERENCES NVTiepNhan(MaNVTiepNhan);


/*
-- 1. Trigger cập nhật số lượng chỗ trống sau khi tạo phiếu dự thi
CREATE TRIGGER trg_update_soluong_thisinh
ON PhieuDuThi
AFTER INSERT
AS
BEGIN
    UPDATE lt
    SET SoChoTrong = SoChoTrong - 1
    FROM LichThi lt
    INNER JOIN inserted i ON lt.MaLichThi = i.MaLichThi;
END;
GO

DROP TRIGGER IF EXISTS trg_capnhat_thanhtoan_phieudk;


-- 2. Trigger cập nhật trạng thái thanh toán phiếu đăng ký khi có hóa đơn
CREATE TRIGGER trg_capnhat_thanhtoan_phieudk
ON HoaDonDangKy
AFTER INSERT
AS
BEGIN
    UPDATE pd
    SET TrangThaiPhieu = N'Đã thanh toán'
    FROM PhieuDangKy pd
    INNER JOIN inserted i ON pd.MaPhieuDangKy = i.MaPhieuDangKy;
END;


-- 3. Trigger cập nhật trạng thái thanh toán phiếu gia hạn
CREATE TRIGGER trg_capnhat_thanhtoan_phieugh
ON HoaDonGiaHan
AFTER INSERT
AS
BEGIN
    UPDATE pg
    SET TrangThaiThanhToan = N'Đã thanh toán'
    FROM PhieuGiaHan pg
    INNER JOIN inserted i ON pg.MaPhieuGiaHan = i.MaPhieuDKGiaHan;
END;
GO
-- 4. Trigger tạo phiếu dự thi khi thêm phiếu đăng ký
CREATE TRIGGER trg_tao_phieu_duthi
ON PhieuDangKy
AFTER INSERT
AS
BEGIN
    INSERT INTO PhieuDuThi (
        MaPhieuDuThi, SoBaoDanh, NgayThi, GioThi, TrangThaiPhieu,
        MaThiSinh, MaPhieuDangKy, NguoiTao, MaLichThi
    )
    SELECT 
        'DT' + RIGHT('000000' + CAST(ABS(CHECKSUM(NEWID())) % 1000000 AS VARCHAR), 6),
        'SBD_' + RIGHT('000000' + CAST(ABS(CHECKSUM(NEWID())) % 1000000 AS VARCHAR), 6),
        GETDATE(),
        CONVERT(TIME, GETDATE()),
        N'Chưa thi',
        NULL, i.MaPhieuDangKy, i.NguoiTao, NULL
    FROM inserted i;
END;
GO
-- 5. Trigger cập nhật trạng thái chứng chỉ khi có kết quả
CREATE TRIGGER trg_capnhat_chungchi
ON KetQua
AFTER INSERT
AS
BEGIN
    UPDATE cc
    SET MoTa = 'Đã cấp'
    FROM ChungChi cc
    INNER JOIN inserted i ON cc.MaChungChi = i.ChungChi;
END;
GO
*/


-- Nhân viên kế toán
INSERT INTO NVKeToan (MaNVKeToan, HoTen, SoDienThoai, Email, NgaySinh, GioiTinh, DiaChi)
VALUES ('KT001', N'Trần Thị B', '0911222333', 'tran.b@accicenter.com', '1990-03-22', N'Nữ', N'123 Nguyễn Văn Cừ, Quận 5, TP.HCM');

-- Nhân viên tiếp nhận
INSERT INTO NVTiepNhan (MaNVTiepNhan, HoTen, SoDienThoai, Email, NgaySinh, GioiTinh, DiaChi)
VALUES ('TN001', N'Nguyễn Văn A', '0909123456', 'nguyen.a@accicenter.com', '1995-06-15', N'Nam', N'45 CMT8, Quận 10, TP.HCM');

-- Nhân viên tổ chức thi
INSERT INTO NVToChucThi (MaNVToChucThi, HoTen, SoDienThoai, Email, NgaySinh, GioiTinh, DiaChi)
VALUES ('TCT001', N'Lê Văn C', '0933444555', 'le.c@accicenter.com', '1988-09-10', N'Nam', N'87 Võ Thị Sáu, Quận 3, TP.HCM');

-- Nhân viên nhập liệu
INSERT INTO NVNhapLieu (MaNVNhapLieu, HoTen, SoDienThoai, Email, NgaySinh, GioiTinh, DiaChi)
VALUES ('NL001', N'Phạm Thị D', '0944555666', 'pham.d@accicenter.com', '1997-12-01', N'Nữ', N'102 Pasteur, Quận 1, TP.HCM');

-- Nhân viên coi thi
INSERT INTO NVCoiThi (MaNVCoiThi, HoTen, SoDienThoai, Email, NgaySinh, GioiTinh, DiaChi)
VALUES ('CT001', N'Võ Minh E', '0966789123', 'vo.e@accicenter.com', '1992-05-20', N'Nam', N'36 Hoàng Văn Thụ, Tân Bình, TP.HCM');


DELETE FROM NVKeToan;
DELETE FROM NVTiepNhan;
DELETE FROM NVToChucThi;
DELETE FROM NVNhapLieu;
DELETE FROM NVCoiThi;

-- kế toán
ALTER TABLE NVKeToan
ALTER COLUMN HoTen NVARCHAR(100);

ALTER TABLE NVKeToan
ALTER COLUMN GioiTinh NVARCHAR(10);

ALTER TABLE NVKeToan
ALTER COLUMN DiaChi NVARCHAR(255);

-- tiếp nhận
ALTER TABLE NVTiepNhan
ALTER COLUMN HoTen NVARCHAR(100);

ALTER TABLE NVTiepNhan
ALTER COLUMN GioiTinh NVARCHAR(10);

ALTER TABLE NVTiepNhan
ALTER COLUMN DiaChi NVARCHAR(255);

--tổ chức thi
ALTER TABLE NVToChucThi
ALTER COLUMN HoTen NVARCHAR(100);

ALTER TABLE NVToChucThi
ALTER COLUMN GioiTinh NVARCHAR(10);

ALTER TABLE NVToChucThi
ALTER COLUMN DiaChi NVARCHAR(255);

-- nhập liệu
ALTER TABLE NVNhapLieu
ALTER COLUMN HoTen NVARCHAR(100);

ALTER TABLE NVNhapLieu
ALTER COLUMN GioiTinh NVARCHAR(10);

ALTER TABLE NVNhapLieu
ALTER COLUMN DiaChi NVARCHAR(255);

-- coi thi
ALTER TABLE NVCoiThi
ALTER COLUMN HoTen NVARCHAR(100);

ALTER TABLE NVCoiThi
ALTER COLUMN GioiTinh NVARCHAR(10);

ALTER TABLE NVCoiThi
ALTER COLUMN DiaChi NVARCHAR(255);

select * from NVKeToan
select * from NVCoiThi
select * from NVNhapLieu
select * from NVTiepNhan
select * from NVToChucThi